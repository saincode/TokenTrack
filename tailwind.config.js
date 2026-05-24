/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#667085",
        royal: "#0F62FE",
        skyGlass: "#EEF6FF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(15, 98, 254, 0.12)",
        soft: "0 16px 50px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
