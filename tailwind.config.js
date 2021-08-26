module.exports = {
  // mode:'jit',
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        NeueHaas: "NeueHaas",
      },
      colors: {
        "ted-red": "#E61B2E",
      },
      width: {
        "sponsor-text": "600px",
        "sponsor-logo": "200px",
      },
      fontSize: {
        base: ["16px", "20px"],
        display: [
          "72px",
          {
            letterSpacing: "-0.015em",
            lineHeight: "0.933em",
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
