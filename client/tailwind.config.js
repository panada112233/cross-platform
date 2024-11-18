import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#B22222', // น้ำตาลเมนู
        'peach': '#F5C2B1', // สีพีชหวาน
        'mint': '#A1E3D8', // เขียวมิ้นต์อ่อน
        'lavender': '#E0B8D7', // สีลาเวนเดอร์
        'cream': '#E9967A', // สีน้ำตาล
        'pastel-pink': '#F7B7D4', // ชมพูพาสเทล
        'light-gray': '#D3D3D3', // เทาอ่อน
        'lavender-blue': '#E2D7F0', // สีลาเวนเดอร์บลู
      },
    },
  },
  plugins: [daisyui],
  
}