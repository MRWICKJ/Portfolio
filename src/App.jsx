import { useState } from 'react'
import './App.css'
import Laptop from './3d_Components/Laptop/App'
import {TimelineDemo} from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarDemo/>
     <div className='flex items-center justify-center bg-[#111] h-screen text-slate-500' id='home'>
        <p className='font-extrabold text-white text-9xl'>
          Hello World
        </p>
      </div>
      <div id='projects'>
        <Laptop/>
      </div>
      <div id=''>
        <TimelineDemo/>
      </div>
   
    </>
  )
}

export default App
