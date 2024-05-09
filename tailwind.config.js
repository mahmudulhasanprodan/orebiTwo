/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
    },

    fontFamily: {
      DMsans: "var(--DMsans)",
    },

    extend: {

      colors: {
        BtnColor: "var(--BtnColor)",
        MainfontColor: "var(--MainfontColor)",
        FooterColor: "var(--FooterColor)",
        CommonColor: "var(--BtnColor)",
        MenuTextColor: "var(--MenuTextColor)",
        MenuBgColor: "var(--MenuBgColor)",
      },

    },
  },
  plugins: [],
}