import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NJ Law Tips — why we created this resource, our mission, and how we help New Jersey injury victims understand their legal rights.",
};

export default function AboutPage() {
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
            Our Mission
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About NJ Law Tips
          </h1>
          <p className="text-text-light text-lg leading-relaxed">
            Plain-language legal guidance for New Jersey residents who have been
            hurt and need answers.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div>
            <h2 className="text-text-primary text-2xl font-bold mb-5">
              Why We Built This
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              After an accident, most people have never dealt with insurance
              adjusters, medical bills, or personal injury claims before. They
              search online for answers and find either generic legal disclaimers
              or articles written for attorneys — not for ordinary people trying
              to understand what happened to them.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              NJ Law Tips was created to fill that gap. We write about New
              Jersey personal injury law in plain English — covering the real
              questions injury victims ask: What do I do first? How does NJ
              no-fault insurance work? How long do I have to file a claim? Do I
              even need a lawyer?
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Our goal is to help you make informed decisions at a difficult
              time. We're not here to replace a lawyer — we're here to make sure
              you understand enough to know when you need one and what to expect
              when you talk to one.
            </p>
          </div>

          {/* Photo */}
          <div className="flex flex-col gap-6">
            <img
              src="/images/about/lawyer-courtroom-400x500.jpg"
              alt="Personal injury lawyer arguing a case in a courtroom"
              className="w-full aspect-[4/5] rounded-[10px] object-cover"
              width={400}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Mission + Differentiators */}
      <section className="bg-surface-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-text-primary text-3xl font-bold">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "New Jersey Focused",
                desc: "Every article is written specifically for NJ law — not generic advice that may not apply to your state.",
              },
              {
                icon: "🗣️",
                title: "Written for People, Not Lawyers",
                desc: "No confusing jargon. We explain legal concepts the way you'd explain them to a friend.",
              },
              {
                icon: "🔍",
                title: "Practical and Actionable",
                desc: "We focus on what you can actually do — steps to take, deadlines to know, and questions to ask your attorney.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-surface-border rounded-[10px] p-7"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-text-primary text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-50 border border-surface-border rounded-[10px] p-7">
            <h3 className="text-text-primary text-base font-bold mb-2">
              Important Disclaimer
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              NJ Law Tips provides general legal information for educational
              purposes only. Nothing on this site constitutes legal advice or
              creates an attorney-client relationship. Every situation is unique
              — if you've been injured, please consult with a licensed New
              Jersey personal injury attorney about the specific facts of your
              case.
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-text-secondary text-base mb-5">
              Ready to talk to an attorney about your situation?
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-semibold px-9 py-4 rounded-md transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
