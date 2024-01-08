/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        retro: "8px 8px 0 0",
      },

      colors: {
        cream: "#ffefc9",
        lightCream: "#fff7e9",
        yellow: "#ffcb04",
        darkGray: "#494a4a",
        baseGray: "#5e5e5e",
        orange: "#ff5d25",
      },
    },
  },
  plugins: [],
};
