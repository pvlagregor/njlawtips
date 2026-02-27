import Link from "next/link";

const services = [
  {
    icon: "🚗",
    title: "Motor Vehicle Accidents",
    description:
      "What to do after a crash, how NJ no-fault insurance works, uninsured driver rules, and how to calculate your compensation.",
    tag: "motor-vehicle-accidents",
  },
  {
    icon: "🏢",
    title: "Slip & Fall Injuries",
    description:
      "Premises liability in NJ, proving negligence, property owner responsibilities, and what your claim might be worth.",
    tag: "slip-and-fall",
  },
  {
    icon: "🏗️",
    title: "Workplace Injuries",
    description:
      "Workers' compensation in NJ, third-party claims, employer responsibilities, and steps to protect your rights after a work accident.",
    tag: "workplace-injuries",
  },
  {
    icon: "🏥",
    title: "Medical Malpractice",
    description:
      "When medical errors cause harm, what qualifies as malpractice in NJ, the statute of limitations, and how to pursue a claim.",
    tag: "medical-malpractice",
  },
];

export function ServiceCards() {
  return (
    <section className="bg-surface-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-500 text-xs font-semibold uppercase tracking-[2.5px] mb-3">
            Topics We Cover
          </p>
          <h2 className="text-text-primary text-3xl md:text-4xl font-bold mb-4">
            NJ Injury Law, Explained Clearly
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            From car accidents to workplace injuries, we cover the personal
            injury topics that matter most to New Jersey residents.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/blog?category=${service.tag}`}
              className="bg-white border border-surface-border rounded-[10px] p-7 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-text-primary text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
              <p className="mt-4 text-blue-500 text-sm font-semibold">
                Read articles →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
