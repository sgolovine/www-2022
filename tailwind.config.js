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
        "brand-amazon": "#FF9900",
        "brand-react": "#61DAFB",
        "brand-mui": "#007FFF",
      },
    },
  },
  variants: {
    extends: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
