import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 px-6 md:py-28"
      style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b2d4f 55%, #1a3a6b 100%)",
      }}
    >
      <img
        src="/images/home/courthouse-hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.05 }}
      />
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-blue-300 text-sm font-semibold uppercase tracking-[2.5px] mb-6">
          New Jersey Personal Injury Legal Guidance
        </p>

        {/* Headline */}
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          Injured in New Jersey?{" "}
          <span className="text-blue-300">Know Your Rights.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-text-light text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Plain-language answers to the questions injury victims actually ask —
          from car accidents and insurance claims to timelines, compensation, and
          when you need a lawyer.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-9 py-4 rounded-md transition-colors text-base"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/blog"
            className="border border-white/40 hover:border-white text-white font-semibold px-9 py-4 rounded-md transition-colors text-base"
          >
            Read Legal Tips
          </Link>
        </div>
      </div>
    </section>
  );
}
