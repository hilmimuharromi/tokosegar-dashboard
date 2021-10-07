const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    jungleGreen: "#23AB96",
    deepCarmine: "#AB2338",
  },
};

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#23AB96",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vw'
     },
     minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '90': '90%',
      'full': '100%',
      'screen': '100vh'
     },
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require("@tailwindcss/forms")({
    strategy: 'class',
  }),],
};
