import formsPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#B7F500",
          hover: "#9FD900",
          charcoal: "#101820",
          deep: "#0B1117",
          muted: "#667085",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 48px rgba(16, 24, 32, 0.08)",
        lime: "0 12px 32px rgba(183, 245, 0, 0.18)",
      },
    },
  },
  plugins: [formsPlugin],
};
