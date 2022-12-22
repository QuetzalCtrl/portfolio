module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
        '7xl': '85rem',
        '5xl': '60rem',
        '2xl': '42rem',
        'full' : '100%'
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: "#FFFFFF",
        'dark': "#09121f",
        'black': "#000",
        'gray': "#666",
        'lightgray': "#9d9d9c",
        'lightgray-100': "rgb(243 244 246)",
        'lightgray-200': "rgb(229 231 235)",
        'light': "#ececec",
        'red' : "#E7323E",
        'green' : "#5db131",
        'pink' : "#ED6E7B",
        'blue' : "#3486C7",
        'lightblue' : "#abc1e5",
        'sky' : "#67AEE1",
        'lightsky' : "#b3d6f0",
        'lightsky-200' : "#60affd",
        'lightsky-300' : "#72d8ff"
    },
    extend: {
        fontFamily: {
            roboto: ['Roboto', "sans-serif"],
            montserrat: ['Montserrat', "sans-serif"],
        },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
