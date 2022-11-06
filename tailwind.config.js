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
      }
    },
  },
  plugins: [],
}
