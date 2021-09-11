const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Barlow Semi Condensed', sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          dark: 'hsl(229, 25%, 31%)',
          score: 'hsl(229, 64%, 46%)',
          header: 'hsl(217, 16%, 45%)',
        },
      },
      backgroundImage: {
        main: 'radial-gradient(circle,hsl(214, 47%, 23%),hsl(237, 49%, 15%))',
        scissors: 'linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))',
        paper: 'linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))',
        rock: 'linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))',
      },
      boxShadow: {
        shading: `0 0 0 20px rgba(96, 110, 133,0.2), 
                  0 0 0 50px rgba(96, 110, 133,0.1),
                  0 0 0 70px rgba(96, 110, 133,0.05)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
