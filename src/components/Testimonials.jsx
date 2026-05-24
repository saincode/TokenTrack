import { Quote } from "lucide-react";
import AnimatedCard from "./AnimatedCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { testimonials } from "../data/landingData.js";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by service-focused business owners"
          description="Early teams use TokenTrack to bring more calm and clarity to daily customer flow."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={testimonial.name} delay={index * 0.07} className="glass-card rounded-3xl p-6">
              <Quote className="mb-5 text-royal" size={30} />
              <p className="min-h-32 text-base leading-7 text-ink">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-white/80 pt-5">
                <p className="font-bold text-ink">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
