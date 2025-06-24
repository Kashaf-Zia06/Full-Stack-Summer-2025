import { useState } from 'react'
import { useCallback, useEffect, useRef } from 'react';

import './App.css'

function App() {

  const [length, setlength] = useState(8);
  const [noAllow, setNoAllow] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noAllow)
      str += "0123456789"
    if (isChar)
      str += "+/*-{}@#$";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, noAllow, isChar, setPassword])


  useEffect(() => {
    passwordGenerator()

  }, [length, noAllow, isChar, passwordGenerator])


  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select() //to shown on UI that something has selected
    // passwordRef.current?.setSelectionRange(0,3) //if we want some particular range to be selected
    window.navigator.clipboard.writeText(password)

  }, [password])


  return (

    <div className='bg-gray-500 text-white-600 mx-auto flex flex-col justify-center align-middle place-content-center w-3xl rounded-2xl p-5 my-4 border-none'>
      <h1 className='text-amber-50 text-center font-medium'> Password Generator</h1>
      <div className='text-black mx-auto  w-full p-3 bg-white my-2 flex justify-center place-content-center align-middle m-auto rounded-2xl  '>
        <input type="text"
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef}
          className='border-none focus:outline-none focus:ring-0 w-full'
        />
        <button onClick={copyToClipboard} className='bg-blue-700 text-amber-50 hover:bg-blue-400 hover:text-black rounded-2xl p-2 cursor-pointer'>
          copy
        </button>
      </div>

      <div className='flex flex-row gap-4 my-2'>
        <div className='flex align-middle '>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setlength(e.target.value)

            }}
          />
          <label className='text-amber-100' >Length: {length}</label>
        </div>


        <div className='flex align-middle'>
          <label className='text-amber-100' >Numbers: </label>
          <input
            type="checkbox"
            defaultChecked={noAllow}
            className='cursor-pointer'
            onChange={() => {
              setNoAllow((prev) => (!prev));

            }}
          />
        </div>


        <div className='flex align-middle'>
          <label className='text-amber-100' >Characters: </label>
          <input
            type="checkbox"
            defaultChecked={isChar}
            className='cursor-pointer'
            onChange={() => {
              setIsChar((prev) => (!prev));

            }}
          />
        </div>


      </div>

    </div>

  )
}


export default App
