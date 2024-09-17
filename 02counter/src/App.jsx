// useState is a React Hook that lets you add a state variable(Components often need to change what’s on the screen as a result of an interaction.)
// to your component.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(1)

  // let counter = 5

const addValue=()=>{
  if (counter<20) {
    setcounter(counter+1)
  }
  } 

const removeValue=()=>{
  if (counter>0) {
    setcounter(counter-1)
  }
    } 
return (
    <>
     <h1>Counter editor</h1>
     <h1>counter value : {counter}</h1> 
     <button onClick={addValue}>add value : {counter}</button>
     <button onClick={removeValue}>remove value : {counter}</button>
    </>
  )
}

export default App
