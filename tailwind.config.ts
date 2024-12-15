import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          paleBlue: "hsl(225, 100%, 94%)",
          brightBlue: "hsl(245, 75%, 52%)",
        },
        second: {
          veryPaleBlue: "hsl(225, 100%, 98%)",
          desaturatedBlue: "hsl(224, 23%, 55%)",
          darkBlue: "hsl(223, 47%, 23%)",
        },
      },
      backgroundImage: {
        desktop: "url('/images/pattern-background-desktop.svg')",
        mobile: "url('/images/pattern-background-mobile.svg')",
      },
      boxShadow: {
        button: "0px 10px 20px hsla(223, 47%, 23%, 0.3)",
        card: "0px 10px 30px hsla(223, 47%, 23%, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
