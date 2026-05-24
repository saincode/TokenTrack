import AnimatedCard from "./AnimatedCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { steps } from "../data/landingData.js";

export default function HowItWorks() {
  return (
    <section id="workflow" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Workflow"
          title="Up and running in three easy steps"
          description="A simple operating flow for teams that need speed without adding complexity."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedCard
              key={step.title}
              delay={index * 0.08}
              className="group rounded-3xl border border-[#dbeafe] bg-[#f8fbff] p-6 shadow-soft transition hover:-translate-y-2 hover:border-royal"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-6xl font-extrabold text-[#d8e9ff] transition group-hover:text-[#b8d8ff]">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-[#dbeafe]" />
              </div>
              <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
