import AnimatedCard from "./AnimatedCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { features } from "../data/landingData.js";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Features"
          title="Everything teams need to run faster queues"
          description="TokenTrack brings live token movement, staff operations, analytics, and customer updates into one modern workspace."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.05}
                className="glass-card rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-royal text-white shadow-soft">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
