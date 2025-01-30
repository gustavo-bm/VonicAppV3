/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        vonic: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#CE171F',
          600: '#A11218',
          700: '#7D0E12',
          800: '#590A0D',
          900: '#350608',
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
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-vonic': 'linear-gradient(135deg, #CE171F 0%, #8B0000 100%)',
        'gradient-vonic-soft': 'linear-gradient(135deg, rgba(206,23,31,0.9) 0%, rgba(139,0,0,0.9) 100%)',
        'gradient-vonic-hover': 'linear-gradient(135deg, #8B0000 0%, #CE171F 100%)',
        'gradient-vonic-dark': 'linear-gradient(135deg, #CE171F 0%, #000000 100%)',
        'gradient-vonic-transparent': 'linear-gradient(135deg, rgba(206,23,31,0.1) 0%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} 