import { useState } from 'react'
import './App.css'

import Laptop from './3d_Components/Laptop/App'
import { TimelineDemo } from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
import Landing from './components/Landing/app'
import { Link } from 'react-scroll' // Import from react-scroll

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarDemo />
        <div id='home'>
            <Landing/>
        </div>

     

      <div id='projects'>
        <Laptop />
      </div>

      <div id='journey'>
        <TimelineDemo />
      </div>
    </>
  )
}

export default App
