/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color":"var(--primary-color)",
        "secondary-color":"var(--secondary-color)",
        "light-primary-color":"var(--light-primary-color)",
        "light-sky-blue":"var(--light-sky-blue)",
        "background-color":"var(--background-color)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-6deg)'},
          '15%, 85%': {transform: 'rotate(0deg)'},
          '25%, 75%': {transform: 'rotate(-6deg)'},
          '35%, 65%': {transform: 'rotate(0deg)'},
          '50%': { transform: 'rotate(-6deg)' },
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        }
      }
    },
  },
  plugins: [],
}
