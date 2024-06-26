/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display:['Reddit Sans','mono']
        ,
        freeman:['Freeman ','mono'],
        Canada:['Canada ','mono'],
        Lato:['Lato ','mono']
      }
    },
  },
  plugins: [],
}

