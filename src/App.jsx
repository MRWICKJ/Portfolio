import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center bg-[#111] h-screen text-slate-50 text-9xl'>
      <p className='bg-gradient-to-tr from-indigo-500 to-red-500 bg-clip-text bg-transparent font-extrabold'>
     Hello World
      </p>
    </div>
    </>
  )
}

export default App
