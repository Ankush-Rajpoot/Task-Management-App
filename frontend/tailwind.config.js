/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#535bf2',
        background: '#f8fafc',
        surface: '#ffffff',
        text: '#1e293b'
      }
    },
  },
  plugins: [],
}