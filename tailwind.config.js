/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        seoulBlue: '#2f74d0',
        seoulBlueSoft: '#eaf3ff',
        seoulOrange: '#f59e42',
        seoulOrangeSoft: '#fff3e7',
        ink: '#1f2937',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 41, 55, 0.08)',
      },
    },
  },
  plugins: [],
};
