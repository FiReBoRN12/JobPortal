module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #ffd52c 0, #ffea95 25%, #fff 50%, #ffea95 75%, #ffd52c 100%)',
      },
      animation: {
        'text-animation': 'text-animation 150s linear infinite',
      },
      keyframes: {
        'text-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
