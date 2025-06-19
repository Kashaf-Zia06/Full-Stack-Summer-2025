import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/card'
import Card from './components/card.jsx'

function App() {


  return (
    <>
      {/* <h1 className='bg-green-400 text-black-50 p-4 rounded-2xl'>TailWind CSS</h1> */}


<div className="min-h-0 bg-blue-100 p-10">
      <div className="flex flex-wrap gap-4 justify-center">

      <Card name="Kashaf" age="20" religion="Islam" country="Pakistan" /> {/*sending card no*/}
      <Card name="Ali" age="23" religion="Islam" country="UAE"/> {/*sending card no*/}
      <Card name="Ozge Torer" age="23" religion="Islam" country="Turkiye"/> {/*sending card no*/}
      </div>
</div>
    </>
  )
}

export default App
