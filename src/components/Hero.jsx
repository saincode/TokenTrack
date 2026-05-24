import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup.jsx";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/landingData.js";
import { buttonMotion, fadeUp, staggerContainer } from "../lib/motion.js";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[radial-gradient(circle_at_20%_0%,#dcecff_0%,transparent_34%),linear-gradient(135deg,#ffffff_0%,#eef6ff_52%,#ffffff_100%)] pb-20 pt-6">
      <div className="section-shell">
        <motion.header
          className="flex items-center justify-between rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-xl"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Logo />
          <motion.nav
            className="hidden items-center gap-7 text-sm font-medium text-muted md:flex"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition hover:text-royal"
                variants={fadeUp}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>
          <motion.a
            href="#dashboard"
            className="hidden rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#064ed8] sm:inline-flex"
            {...buttonMotion}
          >
            View Dashboard
          </motion.a>
        </motion.header>

        <div className="grid items-center gap-12 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:pt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal shadow-soft"
              variants={fadeUp}
            >
              Digital token control
            </motion.span>
            <motion.h1
              className="font-display text-5xl font-extrabold leading-[0.95] text-ink sm:text-6xl lg:text-7xl"
              variants={fadeUp}
            >
              Smart Queue Management Made Simple
            </motion.h1>
            <motion.p className="mt-6 max-w-xl text-lg leading-8 text-muted" variants={fadeUp}>
              Manage tokens, reduce waiting time, and monitor queues in real time with TokenTrack.
            </motion.p>
            <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 font-semibold text-white shadow-glass transition hover:-translate-y-1 hover:bg-[#064ed8]"
                {...buttonMotion}
              >
                Get Started <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-6 py-3.5 font-semibold text-ink shadow-soft transition hover:-translate-y-1 hover:text-royal"
                {...buttonMotion}
              >
                <PlayCircle size={18} /> View Dashboard
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-[#b8d8ff] blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 left-6 h-36 w-36 rounded-full bg-white blur-2xl"
              animate={{ y: [0, -14, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <DashboardMockup compact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
