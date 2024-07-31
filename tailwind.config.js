/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'],
        playAR: ['Playwrite AR', 'sans-serif'],
        playIT: ['Playwrite IT Moderna', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
