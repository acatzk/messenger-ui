module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'side': '360px',
        'small': '5.5rem'
      },
      fontSize: {
        'xb': '.800rem'
      },
      colors: {
        'green-active': '#5ad539'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active', 'group-hover'],
      opacity: ['active']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-line-clamp')
  ],
}
