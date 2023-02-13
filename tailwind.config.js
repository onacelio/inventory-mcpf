/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins"]
    },
    extend: {
      colors: {
        'mcpf-green': "#04A65B",
        "mcpf-background": "#03735B",
        "mcpf-text": "#001514",
        "mcpf-yellow": "#FFD61F"
      },
      height: {
        'heigth-90': '90vh',
      }
    },
  },
  plugins: [],
}
