import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

/** Teal primary scale — matches portfolio accents */
const tealPrimary = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a",
  foreground: "#ffffff",
  DEFAULT: "#0d9488",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: tealPrimary,
            focus: "#0d9488",
          },
        },
        dark: {
          colors: {
            primary: {
              ...tealPrimary,
              foreground: "#042f2e",
              DEFAULT: "#2dd4bf",
            },
            focus: "#2dd4bf",
            background: "#09090b",
          },
        },
      },
    }),
  ],
};
export default config;
