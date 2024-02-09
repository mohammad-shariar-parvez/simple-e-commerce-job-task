/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: '#ff6347',
        tomatoDark: '#e53e3e',
        shadow: '#5E6371',
        shadowDark: "#424958",
        shadowLight: "#f3f3f5"
      }
    }
  },
  plugins: [],
};
