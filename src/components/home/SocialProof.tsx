const testimonials = [
  {
    quote:
      "I had no idea what to do after my car accident. NJ Law Tips explained the no-fault insurance process in plain English and helped me understand I had more options than I thought.",
    name: "Maria T.",
    location: "Essex County, NJ",
    initials: "MT",
  },
  {
    quote:
      "After my slip and fall at a grocery store, I found this site and learned what I needed to document and how the claims process works. I finally felt like I was in control of my situation.",
    name: "James R.",
    location: "Bergen County, NJ",
    initials: "JR",
  },
  {
    quote:
      "The article on statutes of limitations literally saved my case. I didn't realize I was running out of time until I read it here and reached out to an attorney right away.",
    name: "Sandra K.",
    location: "Middlesex County, NJ",
    initials: "SK",
  },
];

const stats = [
  { value: "2 Years", label: "NJ statute of limitations for most injury claims" },
  { value: "$0", label: "Cost of a free consultation with a NJ attorney" },
  { value: "100%", label: "No-cost, no-obligation legal information" },
];

export function SocialProof() {
  return (
    <section className="bg-surface-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-surface-border rounded-[10px] p-6 text-center"
            >
              <div className="text-navy-900 text-3xl font-extrabold mb-1">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-blue-500 text-xs font-semibold uppercase tracking-[2.5px] mb-3">
            Reader Stories
          </p>
          <h2 className="text-text-primary text-3xl md:text-4xl font-bold">
            Real People, Real Results
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-surface-border rounded-[10px] p-7 flex flex-col"
            >
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary text-base mb-5">
            Have questions about your accident? Talk to a qualified NJ attorney
            — free, no obligation.
          </p>
          <a
            href="/contact"
            className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-semibold px-9 py-4 rounded-md transition-colors"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
