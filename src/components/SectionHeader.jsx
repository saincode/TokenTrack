import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal shadow-soft"
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {eyebrow}
      </motion.span>
      <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-muted">{description}</p>}
    </motion.div>
  );
}
