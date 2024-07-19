/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "#F6BDCC",
        gray: "#333333",
      },
    },
    screens: {
      "900px": { max: "900px" },
      "600px": { max: "600px  " },
      "480px": { max: "480px" },

      "420px": { max: "420px" },
    },
  },
};
