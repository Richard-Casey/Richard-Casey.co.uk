// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#009de5",
        "primary-alt": "#00bdf7",
        letterbox: "#1e1e1e", // previously #0a0a0a, now softer dark for Navbar
        "dark-bg": "#2b2b2b", // softer dark background
        "light-bg": "#f0f0f0", // softer light background
      },
      backgroundImage: {
        "silver-line": "linear-gradient(to right, #666, #C0C0C0, #666)",
        "gradient-top": "linear-gradient(to bottom, #1a1a1a, black)",
        "gradient-bottom": "linear-gradient(to top, #1a1a1a, black)",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
      },
      boxShadow: {
        hover: "inset 0px 0px 35px #009de5",
      },
    },
  },
  plugins: [],
};
