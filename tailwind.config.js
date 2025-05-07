// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      colors: {
        primary: "#009de5",
        "primary-alt": "#00bdf7",
        letterbox: "#1e1e1e",
        "dark-bg": "#2b2b2b",
        "light-bg": "#f0f0f0",
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            a: { color: theme("colors.primary") },
            strong: { color: theme("colors.white") },
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.white") },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: { color: theme("colors.primary") },
            strong: { color: theme("colors.primary") },
            h1: { color: theme("colors.primary") },
            h2: { color: theme("colors.primary") },
            h3: { color: theme("colors.primary") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
