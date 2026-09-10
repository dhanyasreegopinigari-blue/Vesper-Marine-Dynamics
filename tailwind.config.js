/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#04080f',
          900: '#080e18',
          850: '#0c1626',
          800: '#111f36',
          700: '#192f52',
          600: '#234375',
          500: '#2f599b',
        },
        cyan: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        subsea: {
          surface: 'rgba(12, 22, 38, 0.75)',
          border: 'rgba(56, 189, 248, 0.15)',
          glow: 'rgba(14, 165, 233, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sonar-ping': 'sonarPing 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave-flow': 'waveFlow 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        sonarPing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        waveFlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
