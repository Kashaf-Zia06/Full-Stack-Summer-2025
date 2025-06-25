import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

let UserContext = createContext(); //make it outside app component always 
function App() {

  const [theme,setTheme]=useState('light');

  //Step -01 : Create Context 
  // Step-02 : Wrap all those components inside provider which we want to give support that they can be consumer at anytime
  //Step-03: Pass value
  //Step:04 Consume it in a child 


  return (
    
    <UserContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'black':'white'}}>

      <ChildA/>
      </div>
    </UserContext.Provider>
  
  )
}

export default App;
export {UserContext}