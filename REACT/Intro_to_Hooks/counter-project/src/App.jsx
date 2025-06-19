import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [counter,setCounter]=useState(0)

  // let count=0;

  
      function add() {
        if(counter>=20)
          setCounter(0)
        else{
        counter=counter+1
        setCounter(counter)
        console.log(counter)
        }
      }

       function remove() {
        if(counter>0)
        {
          
        counter=counter-1
        setCounter(counter)
        console.log(counter)
        }
      }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      <button>{counter}</button>
      <br></br>

      <button onClick={add}>
        
        Add counter 
      
      </button>
      <button onClick={remove} disabled={counter===0}>
        Remove counter
      </button>
    </>
  )
}

export default App
