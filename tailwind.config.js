/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        dyslexic: ["OpenDyslexic", "Lexend", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(26, 37, 70, 0.11)"
      }
    }
  },
  plugins: []
};
