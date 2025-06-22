import { useState } from 'react'

import './App.css'

function App() {
  const [bg, setbg] = useState(false)

  function changeBg(flag) {
    if (flag)
      document.body.style.backgroundColor = "white";
    else
      document.body.style.backgroundColor = "black";
    setbg(!flag)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center mr-auto'>
      <button onClick={() => changeBg(bg)} className='rounded-2xl text-white p-5 cursor-pointer' style={{ backgroundColor: "gray" }}>Change theme
      </button>
    </div>
  )
}

export default App
