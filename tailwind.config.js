/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cultured: "#F4F4F4",
        chinesWhite: "#E0E0E0",
        blackOlive: "#3D3D3D",
        darkSilverColor: "#6D6D6D",
        PhilippineGray: "#8C8C8C",
        grayX11: "#BCBCBC",
        palatinatePurple: "#631363",
        limeGreen: "#40F440",
        white: "#ffff",
        red: "#ED0303",
        blue: "#649DF9",
        textLight: "#b3b3b3",
        btnBlack: "#27272D",
        warning: "#eab308",
      },
    },
  },
  plugins: [],
};
