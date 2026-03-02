import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, website: honeypot, "cf-turnstile-response": turnstileToken } = body as {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
    "cf-turnstile-response"?: string;
  };

  // Honeypot check — silently accept to fool bots
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  // Turnstile verification
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the security check." },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      }
    );

    const verifyData = (await verifyRes.json()) as { success: boolean };
    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) {
    return NextResponse.json(
      { error: "Contact email not configured." },
      { status: 500 }
    );
  }

  const { error } = await resend.emails.send({
    from: "NJ Law Tips Contact Form <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `New consultation request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0d1b2a; margin-bottom: 16px;">New Consultation Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #4a5568; font-size: 14px; font-weight: 600; width: 80px;">Name</td>
            <td style="padding: 8px 0; color: #1a1a2e; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #4a5568; font-size: 14px; font-weight: 600;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #4a90e2;">${email}</a></td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e8ecf2; margin: 16px 0;" />
        <p style="color: #4a5568; font-size: 14px; font-weight: 600; margin-bottom: 8px;">Message</p>
        <p style="color: #1a1a2e; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #e8ecf2; margin: 24px 0;" />
        <p style="color: #7a9cc6; font-size: 12px;">Sent from the NJ Law Tips contact form. Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
