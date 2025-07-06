import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [info, setInfo] = useState([]) //coz we are using map on it thats why initialize with empty array

  useEffect(() => { //we are using useEffect so that this component will not rerender on every render
    axios.get("/api/country").then((response) => { 
      setInfo(response.data)

    }).catch((error) => {
      console.log(error)

    }
    )
  },[])


  return (
    <div>
      <h1>Frontend of REACT</h1>
      <div>
        {
          info.map((inf) =>
            <div key={inf.id}>
              <h4>{inf.country}</h4>
              <p>{inf.capital}</p>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
