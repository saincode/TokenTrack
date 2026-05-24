export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, delay },
  }),
};

export const buttonMotion = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 380, damping: 22 },
};
