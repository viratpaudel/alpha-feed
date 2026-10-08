/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070b10',
        panel: '#0d141b',
        panel2: '#121b24',
        border: '#1c2a35',
        text: '#edf3f8',
        subtext: '#8ba0b3',
        green: '#34d399',
        red: '#f87171',
        amber: '#fbbf24',
        blue: '#60a5fa'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.15), 0 20px 50px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
}
