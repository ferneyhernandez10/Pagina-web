/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'gray-10': 'rgb(251, 251, 251)',
        'gray-20': 'rgb(241, 241, 241)',
      },
    },
    fontFamily: {
      karla: "Karla, Helvetica Neue, Helvetica, Arial, sans-serif",
      Montserrat: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    },
  },
  plugins: [],
};
