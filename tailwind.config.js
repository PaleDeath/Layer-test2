/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#0b0f18",
        white: "#fff",
        darkgray: "#8fa8b1",
        darkturquoise: "#22c6c6",
        aquamarine: "#50f6d8",
        turquoise: "#29d2b4",
        paleturquoise: "#7ee5ee",
      },
      spacing: {},
      fontFamily: {
        impact: "Impact",
        montserrat: "Montserrat",
        inter: "Inter",
        quantico: "Quantico",
        "wendy-one": "'Wendy One'",
        gudea: "Gudea",
        khula: "Khula",
        oswald: "Oswald",
        audiowide: "Audiowide",
        nunito: "Nunito",
      },
      borderRadius: {
        xl: "20px",
        "10xl": "29px",
      },
    },
    fontSize: {
      "82xl": "101px",
      "13xl": "32px",
      "6xl": "25px",
      "21xl": "40px",
      "19xl": "38px",
      "57xl": "76px",
      base: "16px",
      lg: "18px",
      "7xl": "26px",
      "11xl": "30px",
      "54xl": "73px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
