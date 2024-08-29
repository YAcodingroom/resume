/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Play, Noto Serif TC",
    },
    extend: {
      height: {
        screen: "100dvh",
        homepage: "calc(100dvh - 6rem)",
      },
      backgroundImage: { homepage: "url(/home.png)" },
    },
  },
  plugins: [],
};
