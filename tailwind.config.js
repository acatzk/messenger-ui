const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'left-side': '394px',
        'side': '360px',
        'small': '5.5rem'
      },
      fontSize: {
        'xb': '.800rem'
      },
      colors: {
        'green-active': '#5ad539',
        'blue-primary': '#0099FF',
        'blue-secondary': '#CCEBFF'
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 0
          },
          '50%': {
            opacity: 1
          }
        }
      },
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans]
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
