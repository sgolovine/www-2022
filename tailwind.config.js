module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {},
  },
  variants: {
    extends: {},
  },
  plugins: [require("daisyui")],
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
