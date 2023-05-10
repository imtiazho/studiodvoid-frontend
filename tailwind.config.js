/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6600",
          secondary: "#141414",
          accent: "#313332",
          neutral: "#c5c5c5",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

