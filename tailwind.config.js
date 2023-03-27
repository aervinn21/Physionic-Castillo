/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: "#23a6f0",
        secondary: "#252b42",
        lightgray: "#fafafa",
        darkgray: "#737373",
        yellow:"#f3cd03",
      },

      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      },

      fontSize:{
        vhuge: 'clamp(2.5rem, 6vw, 4rem)',
        huge: 'clamp(2rem, 5vw, 3rem)',
        semihuge: 'clamp(1rem, 6vw, 2rem)'
      },
      backgroundImage:{
        'pic': "url('/dist/img/1.webp')",
      },

    },

    container: {
          center: true,
          padding: '1rem',
          screens: {
            xs:'530px',
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1240px',
            '2xl': '1496px',
          },
        }

  },
  plugins: [],
}
