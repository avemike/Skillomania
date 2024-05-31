/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "color-shapes": "url('./assets/welcome_website.svg')",
      },
    },
  },
  plugins: [],
};
