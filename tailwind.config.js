module.exports = {
  darkMode: 'class',

  content: [
    './layouts/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  fontFamily: {
    sans: ['Inter', 'sans-serif']
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#19181B',
          50: '#A2A8B0',
          100: '#9298A2',
          200: '#727985',
          300: '#555B64',
          400: '#393D43',
          500: '#19181B',
          600: '#16171A',
          700: '#0F1011',
          800: '#080809',
          900: '#010101'
        },
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
  },
  plugins: []
}
