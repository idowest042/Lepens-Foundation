module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        joseph: ["Lavishly Yours", "serif"],
        cute: ["Delius Swash Caps", "cursive"], // Added fallback
        ex: ["Ancizar", "serif"]
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }, // This closes 'extend'
  }, // This closes 'theme'
  plugins: [],
}