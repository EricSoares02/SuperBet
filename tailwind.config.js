/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: "#FFFFFF",
      black: "000000",
      midnight: "#011126",
      night:{
        800: '#012340'
      },
      purple:{
        500: '#792BDB'
      },
      blue: {
        400: "#1d4ed8",
        700: "#011C40",
      },
      gray:{
        200: '#F2F2F2',
        300: '#D9D9D9',
        400: '#8C8C8C'
      },
      text: {
        gray: "#374151",
      },
      test: "#DE6368",
    },
    extend: {},
  },
  plugins: [],
};
