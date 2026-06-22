import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f"
        },
        clinical: {
          blue: "#69b8ff",
          teal: "#48d4c0",
          cyan: "#b8edff"
        },
        brand: {
          blue: "#5b83d9",
          purple: "#a96bc8"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      animation: {
        "slow-pulse": "slowPulse 5.8s ease-in-out infinite",
        scan: "scan 4.6s ease-in-out infinite"
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { opacity: "0.62", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" }
        },
        scan: {
          "0%, 100%": { transform: "translateY(-34%)", opacity: "0.15" },
          "50%": { transform: "translateY(34%)", opacity: "0.4" }
        }
      }
    }
  },
  plugins: []
};

export default config;
