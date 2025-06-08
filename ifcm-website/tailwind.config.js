module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        'cera-black': ['"Cera Round Pro Black"', 'sans-serif'],
        'cera-regular': ['"Cera Round Pro Regular"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#211C58',
          accent: '#E41227',
        }
      }
    }
  },
  plugins: [],
}