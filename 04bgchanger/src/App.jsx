import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
{/* <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div> */}
    
    <div className='w-full h-screen '
    style={{backgroundColor:color}}>
      <div className='bg-white flex justify-center rounded-lg'>
        <button onClick={()=>setColor("red")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("yellow")} className='m-4 px-4 rounded-lg '
        style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("purple")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("pink")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("orange")} className='m-4 px-4 rounded-lg text-white'
        style={{backgroundColor:"orange"}}>Orange</button>
      </div>
    </div>
    </>
  )
}

export default App
