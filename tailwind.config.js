module.exports = {
  // mode:'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'NeueHaas': 'NeueHaas'
      },
      colors: {
        'ted-red': '#E61B2E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
