"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-[2.5px] mb-4">
            Free, No Obligation
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get a Free Consultation
          </h1>
          <p className="text-text-light text-lg leading-relaxed max-w-xl mx-auto">
            Have questions about your accident or injury? Send us a message and
            a qualified NJ personal injury attorney will be in touch — at no
            cost to you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-surface-50 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="bg-white border border-surface-border rounded-[10px] p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="text-text-primary text-2xl font-bold mb-3">
                  Message Sent!
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  Thank you for reaching out. We&apos;ll connect you with a
                  qualified NJ personal injury attorney shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-surface-border rounded-[10px] p-8 flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-primary text-sm font-semibold mb-1.5"
                  >
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full border border-surface-border rounded-md px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-primary text-sm font-semibold mb-1.5"
                  >
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-surface-border rounded-md px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-primary text-sm font-semibold mb-1.5"
                  >
                    Tell us about your situation{" "}
                    <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what happened — type of accident, when it occurred, any injuries..."
                    className="w-full border border-surface-border rounded-md px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-blue-500 transition-colors bg-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p className="text-text-muted text-xs text-center">
                  Free consultation. No obligation. No attorney-client
                  relationship is formed by submitting this form.
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {[
              {
                icon: "💬",
                title: "Free & Confidential",
                desc: "Your message is confidential. There's no cost and no obligation to hire an attorney.",
              },
              {
                icon: "⚡",
                title: "Quick Response",
                desc: "We typically respond within 1 business day to connect you with the right attorney.",
              },
              {
                icon: "⏰",
                title: "Don't Wait Too Long",
                desc: "New Jersey has a 2-year statute of limitations for most personal injury claims. Time matters.",
              },
              {
                icon: "🏆",
                title: "NJ-Licensed Attorneys",
                desc: "We only connect you with attorneys licensed to practice personal injury law in New Jersey.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-surface-border rounded-[10px] p-5 flex gap-4"
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-text-primary text-sm font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
