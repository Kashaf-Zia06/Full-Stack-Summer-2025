import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'




const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/About')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to about </button>
    </div>
  )
}

export default Home
