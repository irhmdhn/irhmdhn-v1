/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    // screens: {
    //   'sm': '640px',
    // },
    extend: {
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "spin-slowly": "spin 18s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
