import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <Outlet/>
    </div>
  )
}

export default About
