import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta extraída da logo Porteira Aberta
        porteira: {
          // marrom da porteira / madeira
          50: "#FAF3EC",
          100: "#F0DEC9",
          200: "#DCB894",
          300: "#C4915F",
          400: "#A96A34",
          500: "#8B4A1E",
          600: "#6B3410", // marrom principal (texto/madeira)
          700: "#54290C",
          800: "#3E1E09",
          900: "#2A1407",
        },
        campo: {
          // verde do capim / "agropecuários"
          50: "#EEF7E9",
          100: "#D6ECC8",
          200: "#AEDA96",
          300: "#82C464",
          400: "#5AAB3C",
          500: "#3E8E28",
          600: "#2F6B1E", // verde principal
          700: "#245418",
          800: "#1B3F12",
          900: "#122B0C",
        },
        sol: {
          // nascer do sol (amarelo -> laranja)
          50: "#FEF7E0",
          100: "#FDECB4",
          200: "#FBDC74",
          300: "#F8CB3F",
          400: "#F4B41A", // amarelo sol
          500: "#EF9A0E",
          600: "#E4720E", // laranja
          700: "#BC560B",
          800: "#93430C",
          900: "#78380D",
        },
        creme: {
          DEFAULT: "#FAF6EC",
          50: "#FDFBF5",
          100: "#FAF6EC",
          200: "#F3ECDA",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(42, 20, 7, 0.18)",
        card: "0 20px 50px -20px rgba(42, 20, 7, 0.28)",
        glow: "0 0 0 1px rgba(244,180,26,0.35), 0 18px 40px -16px rgba(228,114,14,0.45)",
      },
      backgroundImage: {
        "sunrise": "radial-gradient(120% 120% at 50% 0%, #F4B41A 0%, #EF9A0E 30%, #E4720E 60%, #6B3410 100%)",
        "field": "linear-gradient(180deg, #EEF7E9 0%, #FAF6EC 100%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
