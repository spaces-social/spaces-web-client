/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        seasalt: "#fbfaf8",
        "accent-medium": "#00a99d",
        "accent-dark": "#00746b",
      },
      fontSize: {
        "s-size-36": "28px",
      },
      textColor: ({ theme }) => ({
        // not really needed
        "accent-medium": theme("colors.accent-medium"),
        seasalt: theme("colors.seasalt"),
      }),
      backgroundSize: {
        "50%": "50%", // hack, could be done with calc
      },
      backgroundImage: ({ theme }) => ({
        rainbow:
          "linear-gradient(90deg, rgba(0,26,255,1) 0%, rgba(255,0,179,1) 17%, rgba(255,0,0,1) 34%, rgba(254,255,0,1) 51%, rgba(0,255,38,1) 66%, rgba(0,255,252,1) 83%, rgba(0,31,255,1) 100%)",
      }),
      animation: ({ theme }) => ({
        loop: "loop 2s linear infinite",
      }),
      keyframes: {
        loop: {
          "0%": { backgroundPosition: "0 0" },
          "0%": { backgroundPosition: "100% 0" },
        },
      },
    },
  },
  plugins: [],
};
