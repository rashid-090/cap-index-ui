/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '380px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl' : '1500px'},
       
   extend: {
     colors:{
       'prmclr': '#23b2e7',
       'secclr': '#1f2b5f',
       'mygray': '#8f8c8c',

     },
     fontFamily: {
      // light:['plusjakarta-light', 'sans-serif'],
      // normal:['plusjakarta-regular', 'sans-serif'],
      // medium:['plusjakarta-medium', 'sans-serif'],
      // semibold:['plusjakarta-semibold', 'sans-serif'],
      // bold:['plusjakarta-bold', 'sans-serif'],
      // extrabold:['plusjakarta-extrabold', 'sans-serif'],
     },
     backgroundImage: {
      // 'banner-bg1': "url('./assets/images/home/3sea1.jpg')",
    }
   },
  
 },
  plugins: [require('@tailwindcss/typography')],
}