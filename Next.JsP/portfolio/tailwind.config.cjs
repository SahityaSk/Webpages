// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[url('/footer-bg-color.png')]",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#ffe7e7ff",
        darkHover: "#2a004a",
        darkTheme: "#1a001f",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000000",
        white: "4px 4px 0 #ffffff",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
