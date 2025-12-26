/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: "#6B856B",
        cream: "#F4E8C1",
        beige: "#DCCDBA",
        honey: "#EBD8A6",
        accent: "#B3C8A9",
        charcoal: "#333333",      // existing
        softbrown: "#5C4A3F",     // pick whatever value you want
        mist: "#F5F3EC"           // for bg-mist, etc.
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-nunito)"]
      },
      boxShadow: {
        brand: "0 10px 30px rgba(165,182,156,.25)"
      }
    }
  },
  plugins: []
};
