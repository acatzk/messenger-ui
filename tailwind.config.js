module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'side': '23.125rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
