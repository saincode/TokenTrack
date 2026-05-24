import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Benefits from "./components/Benefits.jsx";
import CTA from "./components/CTA.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-royal"
        style={{ scaleX }}
      />
      <main className="overflow-hidden bg-[#f8fbff] text-ink">
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </MotionConfig>
  );
}
