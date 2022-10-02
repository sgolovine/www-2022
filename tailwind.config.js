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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  // For not everything is disabled except for the essentials
  // We need for the custom components daisyui provides.
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
