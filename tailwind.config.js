module.exports = {
  // mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        NeueHaas: "NeueHaas",
      },
      screens: {
        smh: { raw: "(min-height: 1234px)" },
      },
      colors: {
        "ted-red": "#E61B2E",
      },
      width: {
        "sponsor-text": "600px",
        "sponsor-logo": "200px",
        "short-line": "20ch",
        "nav-hitarea-l": "34rem",
        "nav-hitarea-sm": "28rem",
        axis: "16rem",
      },
      margin: {
        axis: "16rem",
        speakerDesktop: "35vh",
      },
      padding: {
        axis: "16rem",
      },
      fontSize: {
        xs: [
          "12px",
          {
            letterSpacing: "0.08em",
            lineHeight: "16px",
          },
        ],
        sm: ["14px", "18px"],
        base: ["16px", "20px"],
        display: [
          "72px",
          {
            letterSpacing: "-0.015em",
            lineHeight: "0.933em",
          },
        ],
      },
      gridTemplateColumns: {
        sponsorInfoModal: "auto 2rem",
      },
      gridTemplateRows: {
        sponsors: `repeat(auto-fit, minmax(6rem, 1fr))`,
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss", require("@borisk47/tailwindcss-fluidify")],
};
