/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#FADADD',
        mint: '#CFFFE5',
        lavender: '#E3D7FF',
        babyblue: '#D9ECFF',
        peach: '#FFE5B4',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '32px',
        '3xl': '40px',
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(80, 80, 120, 0.08), 0 1.5px 6px rgba(0,0,0,0.04)',
        'pastel': '0 8px 32px 0 rgba(250, 218, 221, 0.12), 0 2px 8px rgba(207, 255, 229, 0.08)',
      },
    },
  },
  plugins: [],
};
