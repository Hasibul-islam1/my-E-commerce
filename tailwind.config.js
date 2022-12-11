/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}"],
  theme: {
    screens:{
      sm:"576px",
      md:"760px",
      lg:"992px",
      xl:"1200px" 
    },
    container:{
      center:true,
      padding:"1rm"
    },
    extend: {
      fontFamily:{
        Poppins: "'Poppins', sans-serif",
        Roboto: "'Roboto', sans-serif"
      },
      colors:{
        "primary":"#FD3D57",
        "primary1":"#f4cad0"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ], 
}
