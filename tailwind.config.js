/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': 'rgba(60, 197, 83, 1)',
        'primary-5': 'rgba(60, 197, 83, 0.5)',
        'secondary': 'rgba(226, 114, 51, 1)',
        'box-heading': 'rgba(79, 79, 79, 1)',
        'card': 'rgba(244, 248, 249, 1)',
        'gray': 'rgba(241, 242, 244, 1)',
        'gray-1': 'rgba(212, 225, 228, 1)',
        'gray-2': 'rgba(149, 172, 170, 1)',
        'black-1': 'rgba(16, 16, 16, 1)',
        'green': 'rgba(3, 135, 89, 1)',
      },
      width: {
        '30': '120px',
        '108': '432px',
        '128': '512px',
        '30%': '30%',
      },
      maxWidth: {
        '30': '120px',
        '108': '432px',
        '128': '512px',
        '30%': '30%',
      },
      margin: {
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
      }
    },
  },
  plugins: [],
}