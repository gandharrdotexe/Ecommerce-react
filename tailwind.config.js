/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JavaScript and TypeScript files in src
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Includes all files in the pages folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Includes all files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
