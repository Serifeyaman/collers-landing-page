/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      amber: {
        900: "#78350F",
      },
    },
    texts: {
      sm: "4px",
      lg: "16px",
    },
  },
  plugins: [],
};
