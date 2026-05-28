import AnimatedCard from "./AnimatedCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { benefits } from "../data/landingData.js";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Benefits"
          title="Queue management that feels lighter for everyone"
          description="TokenTrack helps teams keep waiting areas organized while giving customers clearer service expectations."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedCard
                key={benefit.title}
                delay={index * 0.06}
                className="rounded-3xl bg-[#f8fbff] p-6 shadow-soft transition hover:-translate-y-2"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-royal shadow-soft">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{benefit.description}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
