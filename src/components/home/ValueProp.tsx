const pillars = [
  {
    icon: "📋",
    title: "Plain-Language Answers",
    description:
      "Legal jargon can be overwhelming after an accident. We translate complex NJ law into clear, straightforward information you can actually use.",
  },
  {
    icon: "⚖️",
    title: "Know Your Rights",
    description:
      "New Jersey has specific rules for personal injury claims — statutes of limitations, no-fault insurance requirements, and more. We help you understand them.",
  },
  {
    icon: "🤝",
    title: "Connect With an Attorney",
    description:
      "Every situation is different. Our articles help you get informed, and when you're ready, we connect you with a qualified NJ personal injury attorney for a free consultation.",
  },
];

export function ValueProp() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-500 text-xs font-semibold uppercase tracking-[2.5px] mb-3">
            Why NJ Law Tips
          </p>
          <h2 className="text-text-primary text-3xl md:text-4xl font-bold mb-4">
            Legal Guidance Built for Injury Victims
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            After an accident, you have questions and limited time to get them
            answered. NJ Law Tips gives you the information you need — specific
            to New Jersey — without the confusing legal language.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-50 border border-surface-border rounded-[10px] p-7"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="text-text-primary text-lg font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
