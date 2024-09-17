// props make the component reusable

import React, { useState } from 'react'
import Card from './components/card'

function App() {

  let myobj={
    username:"chandan",
    age:21
  }
  return (
    <>
    <h1 className='bg-red-500 p-4 rounded mb-4'>Tailwind test</h1>
   {/* <Card username="chandan"  myObj={myobj}/> */}
   <Card cardName="anjali" btnText="click me!"/>
   <Card cardName="riya" btnText="visit me"/>
    </>
  )
}

export default App
