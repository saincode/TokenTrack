import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonMotion } from "../lib/motion.js";

export default function CTA() {
  return (
    <section id="cta" className="px-4 py-20">
      <motion.div
        className="mx-auto max-w-5xl rounded-[2rem] bg-royal px-6 py-14 text-center text-white shadow-glass md:px-12 md:py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#cfe2ff]">Ready for launch</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
          Start Managing Queues Smarter
        </h2>
        <motion.a
          href="#dashboard"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-royal shadow-soft transition hover:-translate-y-1"
          {...buttonMotion}
        >
          Launch Dashboard <ArrowRight size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}
