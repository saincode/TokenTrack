import { motion } from "framer-motion";
import { Bell, CheckCircle2, Clock, MoreHorizontal, UsersRound } from "lucide-react";
import { activity, chartBars } from "../data/landingData.js";
import { fadeUp, staggerContainer } from "../lib/motion.js";

export default function DashboardMockup({ compact = false }) {
  return (
    <motion.div
      className="glass-card relative w-full rounded-[2rem] p-4 sm:p-5"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      whileHover={{ rotateX: 1.5, rotateY: -1.5, y: -6 }}
    >
      <motion.div
        className="absolute -left-3 top-16 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-semibold text-muted">Now Serving</p>
        <p className="text-xl font-extrabold text-royal">A-108</p>
      </motion.div>
      <motion.div
        className="absolute -right-3 bottom-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-semibold text-muted">Avg. Wait</p>
        <p className="text-xl font-extrabold text-ink">08 min</p>
      </motion.div>
      <div className="rounded-[1.5rem] border border-white/80 bg-white/80 p-4 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">Live Dashboard</p>
            <h3 className="mt-1 text-xl font-bold text-ink">Branch Queue</h3>
          </div>
          <motion.button
            className="grid h-10 w-10 place-items-center rounded-full bg-skyGlass text-royal"
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.4 }}
            whileTap={{ scale: 0.92 }}
          >
            <Bell size={18} />
          </motion.button>
        </div>

        <motion.div
          className="grid gap-3 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {[
            ["Total Users", "12.8k", UsersRound],
            ["Active Queues", "24", CheckCircle2],
            ["Pending Tokens", "318", Clock],
          ].map(([label, value, Icon]) => (
            <motion.div key={label} className="rounded-2xl bg-[#f7fbff] p-4" variants={fadeUp}>
              <Icon className="mb-3 text-royal" size={20} />
              <p className="text-2xl font-extrabold text-ink">{value}</p>
              <p className="text-xs font-medium text-muted">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className={`mt-4 grid gap-4 ${compact ? "" : "lg:grid-cols-[1.2fr_0.8fr]"}`}>
          <div className="rounded-2xl bg-[#f7fbff] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold text-ink">Token Analytics</p>
              <MoreHorizontal className="text-muted" size={18} />
            </div>
            <div className="flex h-36 items-end gap-2">
              {chartBars.map((height, index) => (
                <motion.span
                  key={height + index}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-royal to-[#8dbdff]"
                  initial={{ height: 8 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.05 }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f7fbff] p-4">
            <p className="mb-4 font-semibold text-ink">Recent Activity</p>
            <div className="space-y-3">
              {activity.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex gap-3 rounded-xl bg-white p-3 shadow-[0_8px_24px_rgba(16,24,40,0.04)]"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <motion.span
                    className="mt-1 h-2.5 w-2.5 rounded-full bg-royal"
                    animate={{ scale: [1, 1.45, 1], opacity: [1, 0.65, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <p className="text-sm leading-5 text-muted">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
