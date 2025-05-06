import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    
    fontFamily: {
      poppins: ["poppins", "serrif"],

    },

    extend: {

      screens:{
        
          'smPhone': '320px',  // Small phones (e.g., iPhone SE)
          'phone': '360px',      // Regular phones
          'tablet': '768px',     // Tablets (e.g., iPad)
          'largeTablet': '900px', // Large tablets (e.g., iPad Pro)
          'laptop': '1024px',    // Laptops
          'desktop': '1280px',   // Desktops
          'bigDesktop': '1600px' // Very large desktops
       
  
      },

      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, rgb(166, 219, 244), rgb(27, 61, 116))',
        'gradient-to-b': 'linear-gradient(to bottom, rgb(34, 193, 195), rgb(253, 187, 45))',
      },
      
    },
  },
      

// tailwind.config.js







  plugins: [],
} satisfies Config;
