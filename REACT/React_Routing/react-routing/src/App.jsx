import { useState } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import Params from './components/Params';
import Courses from './components/Courses';
import Departments from './components/Departments'
import NotFound from './components/NotFound'


import './App.css'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/About",
      element:
        <div>
          <Navbar />
          <About />
        </div>,
        children:[
          {
            path:"courses",
            element:<Courses/>
          },
          {
            path:"departments",
            element:<Departments/>
          }
        ]
    },
    {
      path: "/Contact",
      element:
        <div>
          <Navbar />
          <Contact />
        </div>
    },

    {
      path: "/Student/:id",
      element:
        <div>
          <Navbar />
          <Params />
        </div>
    },

    {
      path:"/*",
      element:<NotFound/>
    }
  ]
)


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
