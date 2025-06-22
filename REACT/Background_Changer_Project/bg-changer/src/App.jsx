
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [color, setColor] = useState("Pink")


  return (
    <div className='w-full h-screen flex flex-col justify-center align-middle' style={{ backgroundColor: color }}>

      <div className='text-black bg-blue-400 p-6 rounded-2xl flex justify-center items-end flex-wrap gap-2 mx-auto'>
        <button onClick={()=>setColor("red")} className=' rounded-2xl p-3' style={{ backgroundColor: "red", color: "white" }}>Red</button>
        <button onClick={()=>setColor("green")}className=' rounded-2xl p-3' style={{ backgroundColor: "green", color: "white" }}>Green</button>
        <button onClick={()=>setColor("orange")}className=' rounded-2xl p-3' style={{ backgroundColor: "orange", color: "white" }}>Orange</button>
        <button onClick={()=>setColor("purple")}className=' rounded-2xl p-3' style={{ backgroundColor: "purple", color: "white" }}>Purple</button>
      </div>

    </div>

  )


}

export default App
