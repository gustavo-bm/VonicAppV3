/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vonic: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#CE171F',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#713f3f',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-vonic': 'linear-gradient(135deg, #CE171F 0%, #991b1b 100%)',
        'gradient-vonic-to-black': 'linear-gradient(135deg, #CE171F 0%, #000000 100%)',
        'gradient-black-to-vonic': 'linear-gradient(135deg, #000000 0%, #CE171F 100%)',
        'gradient-vonic-transparent': 'linear-gradient(135deg, rgba(206,23,31,0.1) 0%, transparent 100%)',
      },
    },
  },
  plugins: [],
} 