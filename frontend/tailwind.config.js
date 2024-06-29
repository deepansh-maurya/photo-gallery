/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#574F8A",
      },
      fontFamily: {
        playwrite: ['"Playwrite MX"', "sans-serif"],
        playwriteZa: ["Playwrite ZA", "sans-serif"],
        playwriteNg: ['"Playwrite NG Modern"', "sans-serif"],
      },
    },
    screens: {
      sm: { min: "320px", max: "639px" },
      md: { min: "640px", max: "1023px" },
      lg: { min: "1024px", max: "300000px" },
    },
  },
  plugins: [],
};
