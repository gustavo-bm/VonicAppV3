/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
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
          950: '#1c0304',
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
          950: '#0a0b0c',
        }
      },
      spacing: {
        '128': '32rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        // Primários - Base vermelha
        'gradient-vonic': 'linear-gradient(135deg, #CE171F 0%, #8B0000 100%)',
        'gradient-vonic-hover': 'linear-gradient(135deg, #8B0000 0%, #CE171F 100%)',
        'gradient-vonic-soft': 'linear-gradient(135deg, rgba(206, 23, 31, 0.1) 0%, rgba(139, 0, 0, 0.1) 100%)',
        
        // Esquemas de fundo escuros (3 variações)
        'gradient-vonic-dark-1': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        'gradient-vonic-dark-2': 'linear-gradient(135deg, #121212 0%, #1E1E1E 50%, #121212 100%)',
        'gradient-vonic-dark-3': 'linear-gradient(to bottom, #000000 0%, #151515 80%, #000000 100%)',
        
        // Variações entre preto e vermelho (tons escuros)
        'gradient-vonic-dark-accent': 'linear-gradient(135deg, #121212 0%, #250507 100%)',
        'gradient-vonic-dark-rich': 'linear-gradient(135deg, #000000 0%, #350608 100%)',
        
        // Esquemas mais claros
        'gradient-vonic-light-1': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-vonic-light-2': 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
        'gradient-vonic-light-accent': 'linear-gradient(135deg, #f8f9fa 0%, #fef2f2 100%)',
        
        // Overlay e efeitos
        'gradient-overlay-dark': 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
        'gradient-overlay-vonic': 'linear-gradient(to bottom, rgba(206,23,31,0.1) 0%, rgba(206,23,31,0.05) 50%, rgba(206,23,31,0.1) 100%)',
        
        // Radial gradients
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-radial-dark': 'radial-gradient(circle at center, rgba(30,30,30,1) 0%, rgba(10,10,10,1) 100%)',
        'gradient-radial-vonic': 'radial-gradient(circle at center, rgba(206,23,31,0.2) 0%, rgba(206,23,31,0) 70%)',
        
        // Glassmorphism
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(18,18,18,0.7) 0%, rgba(30,30,30,0.4) 100%)',
        'gradient-glass-vonic': 'linear-gradient(135deg, rgba(206,23,31,0.1) 0%, rgba(206,23,31,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-delayed-2': 'float 6s ease-in-out 4s infinite',
        'gradient': 'gradient 15s ease infinite',
        'gradient-slow': 'gradient 25s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      dropShadow: {
        'glow': '0 0 20px rgba(206, 23, 31, 0.5)',
        'glow-sm': '0 0 10px rgba(206, 23, 31, 0.3)',
        'glow-lg': '0 0 30px rgba(206, 23, 31, 0.7)',
        'white-glow': '0 0 10px rgba(255, 255, 255, 0.5)',
      },
      boxShadow: {
        'red-glow': '0 0 15px 5px rgba(206, 23, 31, 0.15)',
        'red-glow-lg': '0 10px 25px -5px rgba(206, 23, 31, 0.3)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'inner-dark': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} 