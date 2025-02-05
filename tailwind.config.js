/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'gris-claro': 'rgb(251, 251, 251)',
      },
    },
    fontFamily: {
      karla: "Karla, Helvetica Neue, Helvetica, Arial, sans-serif",
      Montserrat: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    },
  },
  plugins: [],
};
