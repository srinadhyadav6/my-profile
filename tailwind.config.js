export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // blue-500
        dark: '#1e293b', // slate-800
        'dark-lighter': '#334155', // slate-700
      }
    },
  },
  plugins: [],
}
