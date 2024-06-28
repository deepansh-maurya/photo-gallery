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
  },
  plugins: [],
};
