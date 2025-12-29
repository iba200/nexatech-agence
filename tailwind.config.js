/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FF6B35',
          light: '#FF8C61',
          dark: '#E54E1A',
        },
        blue: {
          dark: '#1A1F3A',
          medium: '#2C3454',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          500: '#6B7280',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
