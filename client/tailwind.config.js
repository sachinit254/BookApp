module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        darkslategray: "#1e6262",
        paleturquoise: "#b4f1f1",
        azure: "#ecfffb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
