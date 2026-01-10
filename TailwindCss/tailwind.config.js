/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // root-level HTML files
    "./src/**/*.{html,js}" // any HTML/JS inside /src
  ],
  theme: {
    extend: {
      fontFamily:{

        mulish:["Mulish","sans-serif"],
      },
      colors:{
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        greenLight:"#61cea6",
        greyText:"#818597",
        lightGrey:"#e2e2e2",
        greyBlue:"#344a6c",
        deepBlueHead:"#162f56",
        grey2:"#525a76",
      },
    },
  },
  plugins: [],
};