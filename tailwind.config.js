// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)' 
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px)' 
          },
          '50%': { 
            transform: 'translateY(-10px) translateX(-10px)' 
          },
          '75%': { 
            transform: 'translateY(10px) translateX(15px)' 
          },
        }
      },
      backgroundImage: {
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};