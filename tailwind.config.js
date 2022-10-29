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
      colors: {
        "tint-10": "rgba(0,0,0,0.10)",
        "tint-25": "rgba(0,0,0,0.25)",
        "tint-50": "rgba(0,0,0,0.50)",
        "tint-75": "rgba(0,0,0,0.75)",
        "tint-90": "rgba(0,0,0,0.90)",
      },
      minWidth: {
        28: "7rem",
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
