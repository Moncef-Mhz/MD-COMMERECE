/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'white':"#fff",
        'white-gray':"#eee",
        'lightYellow':"#fff6e0",
        "dark":"#272829",
        "gray":"#d8d9da",
        'dark-blue':"#61677a"
      },
      backgroundColor:{
        'white':"#fff",
        'white-gray':"#eee",
        'lightYellow':"#fff6e0",
        "dark":"#272829",
        "gray":"#d8d9da",
        'dark-blue':"#61677a"
      },
      fontFamily:{
        'frank':'frank ruhl libre',
        'lato':'lato',
        'inter':'inter'
      },
      fontSize:{
        
        'text-3xl':'32px'
      }
    },
  },
  plugins: [],
}
