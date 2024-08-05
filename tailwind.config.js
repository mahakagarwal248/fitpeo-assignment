/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blackColor: "#1a1a1a",
        blackColorLight: "#262626",
        blackColorLighter: "#4d4d4d",
        greenColorBlur: "rgba(34, 197, 94,0.3)",
        redColorBlur: "rgba(239, 68, 68,0.3)",
      },
    },
  },
  plugins: [],
};
