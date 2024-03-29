/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{html,js,ts,jsx,tsx}", "./src/**/**/*.{html,js,ts,tsx,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
    fontFamily: {
      'sans': ['Merriweather', 'sans-serif'],
      'serif': ['OpenSans', 'serif'],
    }
  },
  plugins: [require('daisyui')],
}