/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {}
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
