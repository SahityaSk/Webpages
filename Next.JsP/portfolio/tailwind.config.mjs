/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",      
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", 
        secondary: "#FACC15"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], 
        ovo: ["Ovo", "serif"]
      }
    },
  },
  plugins: [],
};
