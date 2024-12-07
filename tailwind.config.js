/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#0d3b66", // Deep blue color for dark mode
        warmWhite: "#f5f5f5", // Warm white color for light mode
      },
    },
  },
  daisyui: {
    themes: [
      "synthwave",
      "dark",
      "light",
      {
        deepBlue: {
          primary: "#0d3b66", // Deep blue primary color
          secondary: "#1f487e", // Deep blue secondary color
          accent: "#3b5998", // Accent color
          neutral: "#1a1a1a", // Dark background for deep blue theme
          "base-100": "#0d3b66", // Dark base background
          "base-content": "#ffffff", // Text color in dark mode (light text on dark background)
        },
        warmWhite: {
          primary: "#f5f5f5", // Warm white primary color
          secondary: "#dcdcdc", // Light secondary color
          accent: "#ffc107", // Warm accent color
          neutral: "#ffffff", // Pure white background
          "base-100": "#ffffff", // Base background color for light mode
          "base-content": "#333333", // Dark text color for contrast on light background
        },
      },
    ],
  },
  darkMode: 'class', // Enable dark mode toggle with class
  plugins: [
    require('daisyui'),
  ],
}
