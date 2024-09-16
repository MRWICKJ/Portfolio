import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Organs from './organs/app'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Organs/>
    <div className='flex items-center justify-center bg-[#111] h-screen text-slate-50 text-9xl'>
      <p className='font-extrabold text-white'>
         Hello World
      </p>
    </div>
    </>
  )
}

export default App
