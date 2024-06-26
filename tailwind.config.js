/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: '#dc3545',
        success: '#28a745',
        'danger-light': '#f8d7da',
        'success-light': '#d4edda',
        primary: {
          DEFAULT: "#ffffff",
        },
        secondary: {
          DEFAULT: "#464e5f",
        },
        tertiary: {
          DEFAULT: "#eef0f8",
        },
        black: {
          DEFAULT: "#000000",
          100: "#100d25",
          200: "#090325",
          main: "#3D362B",
        },
        text: {
          dark: "#3A5e27",
          light: "#859448",
        },
        cta: {
          DEFAULT: "#FF914D",
        },

        blue: {
          DEFAULT: "#15729F",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        custom: "0px 4px 3px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/fotor.jpg')",
      },
      screens: {
        xs: "450px",
      },
    },

    plugins: [],
  },
};
