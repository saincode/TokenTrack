import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Benefits from "./components/Benefits.jsx";
import CTA from "./components/CTA.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Dashboard from "./pages/Dashboard.jsx";

/* ── Protected Route wrapper ── */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin" replace />;
  }
  return children;
}

function LandingPage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
