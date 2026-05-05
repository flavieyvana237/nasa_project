/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./nasa_project/templates/**/*.html",
    "./nasa_project/**/*.html",
    "./nasa_project/static/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D91",
        secondary: "#FC3D21",
        dark: "#0B0F19",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}