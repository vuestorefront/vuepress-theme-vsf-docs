module.exports = {
  darkMode: 'class',

  content: [
    './layouts/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  fontFamily: {
    sans: ['Inter', 'sans-serif']
  },
  safelist: ['md:justify-start', 'md:justify-center', 'md:justify-end'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1em',
        sm: '2em',
        lg: '4em',
        xl: '5em',
        '2xl': '6em'
      }
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00C652',
          50: '#7FFFB4',
          100: '#6AFFA8',
          200: '#41FF90',
          300: '#19FF78',
          400: '#00EF63',
          500: '#00C652',
          600: '#008E3B',
          700: '#005624',
          800: '#001E0C',
          900: '#000000'
        },
        purple: {
          DEFAULT: '#531ED3',
          50: '#C7B4F4',
          100: '#BAA2F2',
          200: '#9F7FED',
          300: '#845BE8',
          400: '#6937E3',
          500: '#531ED3',
          600: '#4017A2',
          700: '#2C1071',
          800: '#190940',
          900: '#06020F'
        }
      }
    }
  }
}
