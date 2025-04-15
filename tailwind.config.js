// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        "primary-blue": "#009de5",
        "primary-blue-alt": "#00bdf7",
        "dark-bg": "#0a0a0a",
        "light-bg": "#f4f4f4",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
