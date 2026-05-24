import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/landingData.js";

export default function Footer() {
  return (
    <footer className="border-t border-[#dbeafe] bg-white py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-royal">
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[Twitter, Linkedin, Github].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="grid h-10 w-10 place-items-center rounded-full bg-skyGlass text-royal transition hover:-translate-y-1 hover:bg-royal hover:text-white"
              aria-label="Social link"
              whileHover={{ y: -5, rotate: 4, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
      <p className="section-shell mt-6 text-sm text-muted">
        Copyright © 2026 TokenTrack. All rights reserved.
      </p>
    </footer>
  );
}
