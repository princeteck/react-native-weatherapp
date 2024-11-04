/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins_400Regular'],
        'thin': ['Poppins_100Thin'],
        'extralight': ['Poppins_200ExtraLight'],
        'light': ['Poppins_300Light'],
        'regular': ['Poppins_400Regular'],
        'medium': ['Poppins_500Medium'],
        'semibold': ['Poppins_600SemiBold'],
        'bold': ['Poppins_700Bold'],
        'extrabold': ['Poppins_800ExtraBold'],
        'black': ['Poppins_900Black'],
      }
    },
  },
  plugins: [],
}

