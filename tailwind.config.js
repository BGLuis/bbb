/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCF9F4",
          100: "#F6EFE6",
          200: "#EFE4D6",
          300: "#E3D3BF",
        },
        cocoa: {
          900: "#2A190F",
          800: "#3B2416",
          600: "#6E5446",
          400: "#A08B7D",
          200: "#D6C8BC",
        },
        terracotta: {
          100: "#F5DFD3",
          500: "#C2643C",
          600: "#A64F2B",
          700: "#8A3F21",
        },
        pistachio: {
          100: "#E6EBD5",
          600: "#5F6E3A",
        },
        whatsapp: {
          600: "#1A7F45",
          700: "#146637",
        },
        coral: {
          100: "#F8E1DE",
          600: "#B3261E",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(42, 25, 15, 0.04)",
        card: "0 4px 20px rgba(42, 25, 15, 0.06)",
        hover: "0 10px 30px rgba(42, 25, 15, 0.10)",
        floating: "0 12px 36px rgba(42, 25, 15, 0.16)",
      },
    },
  },
  plugins: [],
};
