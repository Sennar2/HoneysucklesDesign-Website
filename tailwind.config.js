/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./data/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#A5B69C",
        cream: "#F5F3E7",
        beige: "#DCCDBA",
        honey: "#EBD8A6",
        mist: "#C8DAD3",
        softbrown: "#3D3A34"   // darker for better contrast
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-nunito)"]
      },
      boxShadow: { brand: "0 10px 30px rgba(165,182,156,.25)" }
    }
  },
  plugins: []
};
