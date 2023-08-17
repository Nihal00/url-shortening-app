/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primaryCyan:"hsl(180, 66%, 49%)",
        primaryDarkViolet: "hsl(257, 27%, 26%)",

        secondary: "hsl(0, 87%, 67%)",

        gray: "hsl(0, 0%, 60%)",
        lightgray: "hsl(0, 0%, 90%)",
        grayishVoilet: "hsl(257, 7%, 63%)",
        darkBlue: "hsl(255, 11%, 22%)",
        darkViolet: "hsl(260, 8%, 14%)",
        hovering: "hsl(180, 85.39325842696628%, 65.09803921568627%)"
      }
    },
  },
  plugins: [],
}

