module.exports = {
  purge: {
    enabled: false,
    content: ["./pages/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      letterSpacing: {
        4: "4.17px",
        2: "2px",
      },
      fontSize: {
        base: ["15px", "25px"],
      },
      colors: {
        gray: {
          light: "#dfdfdf",
        },
      },
      maxWidth: {
        1110: "1110px",
      },
      width: {
        "42/100": "42.36%",
        "35/100": "35.55%",
      },
      fontSize: {
        h1: ["2.66rem", "3.2rem"],
        "h1-sm": ["2.13rem", "2.66rem"],
        h2: ["1.6rem", "1.66rem"],
        h3: ["1.2rem", "1.66rem"],
        h4: ["0.8rem", "0.9375rem"],
      },
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
