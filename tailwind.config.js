/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        192: "48rem",
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
