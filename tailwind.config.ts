import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        primary: "#FF2157",        
        secondary: "#212121",
        third: '#A5455C',
        button: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
