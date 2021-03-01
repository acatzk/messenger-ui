module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'side': '360px'
      },
      fontSize: {
        'xb': '.800rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active', 'group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-line-clamp')
  ],
}
