module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}",
  './src/components/**/*.{js,ts,jsx,tsx}'],
  purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}', 
        './src/components/**/*.{js,ts,jsx,tsx}'
      ],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    },
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
},
plugins: [
    
],
darkSelector: '.dark-mode',
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },

  },
}