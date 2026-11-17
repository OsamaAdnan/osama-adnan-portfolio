/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050a16',
        navy: { 900: '#0a1226', 800: '#0d1731' },
        panel: '#0f1a33',
        line: '#1b2a4d',
        electric: '#2f7bff',
        aqua: '#22d3ee',
        amber: { soft: '#f5b94c' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        flow: { to: { strokeDashoffset: '-24' } },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        flow: 'flow 1.6s linear infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
