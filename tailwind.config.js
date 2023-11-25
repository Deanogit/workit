/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'dark-blue': '#24053e',
      'elec-green': '#44ffa1',
      'gray-blue': '#584d62',
      'off-white': '#fcf8ff',
      white: '#fff',
    },
    fontFamily: {
      sans: 'Manrope',
      serif: 'Fraunces',
    },
    fontSize: {
      xs: [
        '16px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.16px',
        },
      ],
      sm: [
        '32px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.18px',
        },
      ],
      base: ['16px', '28px'],
      md: ['18px', '32px'],
      lg: ['20px', '36px'],
      xl: ['28px', '36px'],
      '2xl': ['32px', '40px'],
      '3xl': ['32px', '48px'],
      '4xl': ['48px', '56px'],
      '5xl': ['56px', '64px'],
      '6xl': ['50px', '50px'],
      '7xl': ['60px', '60px'],
      '8xl': ['80px', '80px'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {},
  },
  plugins: [],
};
