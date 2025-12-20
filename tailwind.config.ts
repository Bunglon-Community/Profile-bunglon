/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D412E",
          secondary: "#527E58",
          sage: "#B9CFB4",
          neon: "#4ADE80",
        },
        // add flat names if you want bg-brand-light etc.
        "brand-primary": "var(--brand-primary, #1D412E)",
        "brand-secondary": "var(--brand-secondary, #527E58)",
        "brand-sage": "var(--brand-bg-sage, #B9CFB4)",
        "brand-light": "var(--brand-light, #D9E8D6)",
      },
    },
  },
  plugins: [],
}