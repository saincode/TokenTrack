import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { dashboardStats } from "../data/landingData.js";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Dashboard"
          title="A clean command center for daily operations"
          description="Monitor total users, active queues, pending tokens, analytics charts, and recent activity from one responsive admin preview."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            {dashboardStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card flex items-center gap-4 rounded-3xl p-5"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-royal text-white">
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-ink">{stat.value}</p>
                    <p className="text-sm font-medium text-muted">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
