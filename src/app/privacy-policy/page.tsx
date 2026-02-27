import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NJ Law Tips collects, uses, and protects your personal information when you visit our site or use our contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 px-6 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0d1b2a 0%, #1b2d4f 55%, #1a3a6b 100%)",
        }}
      >
        <img
          src="/images/home/courthouse-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.05 }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-light text-lg leading-relaxed">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-text-muted text-sm mb-10">
            Last updated: February 27, 2026
          </p>

          <p className="text-text-secondary text-base leading-relaxed mb-8">
            NJ Law Tips (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website njlawtips.com. This Privacy
            Policy explains how we collect, use, and protect your information
            when you visit our site.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Information We Collect
          </h2>

          <h3 className="text-text-primary text-lg font-semibold mb-2">
            Information You Provide
          </h3>
          <p className="text-text-secondary text-base leading-relaxed mb-2">
            When you use our contact form, we collect:
          </p>
          <ul className="list-disc pl-6 text-text-secondary text-base leading-relaxed mb-6 space-y-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The contents of your message</li>
          </ul>

          <h3 className="text-text-primary text-lg font-semibold mb-2">
            Information Collected Automatically
          </h3>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            When you visit our site, we use Vercel Analytics to collect basic
            usage data such as pages visited and general device/browser
            information. This data is aggregated and does not personally identify
            you.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-text-secondary text-base leading-relaxed mb-8 space-y-1">
            <li>
              Respond to your inquiries submitted through our contact form
            </li>
            <li>Improve our website and the content we provide</li>
            <li>Monitor site performance and usage trends</li>
          </ul>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            How We Share Your Information
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-2">
            We do not sell, rent, or trade your personal information. We may
            share your information with:
          </p>
          <ul className="list-disc pl-6 text-text-secondary text-base leading-relaxed mb-4 space-y-1">
            <li>
              <strong>Resend</strong> — Our email service provider, which
              processes contact form submissions so we can receive and respond to
              your messages
            </li>
            <li>
              <strong>Vercel</strong> — Our hosting and analytics provider, which
              collects anonymized usage data
            </li>
          </ul>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            We may also disclose information if required by law or to protect our
            legal rights.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Data Retention
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Contact form submissions are delivered to us via email. We do not
            store your form data in a database on our site. We retain emails for
            as long as necessary to respond to your inquiry and for our records.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Cookies and Tracking
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Our site uses minimal cookies necessary for site functionality.
            Vercel Analytics collects anonymized, aggregated data and does not
            use cookies for cross-site tracking.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Your Rights
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-2">
            You may contact us at any time to:
          </p>
          <ul className="list-disc pl-6 text-text-secondary text-base leading-relaxed mb-8 space-y-1">
            <li>Request information about the data we hold about you</li>
            <li>Ask us to delete your personal information</li>
            <li>Opt out of any future communications</li>
          </ul>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Third-Party Links
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Our site may contain links to other websites. We are not responsible
            for the privacy practices of those sites.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Children&rsquo;s Privacy
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Our site is not directed at children under 13, and we do not
            knowingly collect information from children.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Changes to This Policy
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>

          <h2 className="text-text-primary text-2xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-0">
            If you have questions about this Privacy Policy, please contact us
            through our{" "}
            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-600 underline transition-colors"
            >
              contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
