/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': `linear-gradient(180deg, #EFF1FD, #FAFAFC)`,
      },
      fontFamily: {
        onest: ['onest', 'sans-serif'],
        hooge: ['hooge', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0862EE',
      secondary: '#F0F2FE',
      gray: '#72798C',
      darkBlue: '#325488',
      lightBlue: '#CFE5FF',
      lightGreen: '#A7E9BE',
      lilac: '#CAD2FF',
      black: '#202020',
      white: '#ffffff',
    },
  },
  plugins: [],
}
