import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'


function App() {

  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:"/notes",
        element: <div>

        <Navbar/>
        <ViewNotes/>
        </div>
        

      },
      {
        path:"/notes/:id",
        element:
        <div>
          <Navbar/>
          <Notes/>
          
        </div>
      }

     
    ]
  )


  

  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
