/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        "60-1": "#D3E5DB",
        "60-2": "#ABC3B5",
        "60-3": "#8FBEA3",
        "60-4": "#76BA93",
        "60-5": "#65AF85",
        "60-6": "#4D9E70",
        "60-7": "#2D754C",

        "30-1": "#FFFBEB",
        "30-2": "#FFF6CF",
        "30-3": "#FFEA94",
        "30-4": "#FFE164",
        "30-5": "#FFD93B",
        "30-6": "#D6AE07",

        "10-text": "#143047",

        background: "#ffffff",
        separator: "#cccccc",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#143047",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
