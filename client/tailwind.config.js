module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        black: "1px solid grey",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
