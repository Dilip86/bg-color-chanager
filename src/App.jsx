import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-xl bg-white gap-3 rounded-lg px-2 py-3'>
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "olive"}}>Olive</button>  
            <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "gray"}}>Gray</button>  
            <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "purple"}}>Purple</button>  
            <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full shadow-sm text-white' style={{backgroundColor: "orange"}}>Orange</button>  
          </div>
        </div>
      </div>
    </>
  )
}

export default App
