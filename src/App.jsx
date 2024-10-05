import { useState } from 'react'
import './App.css'

import Laptop from './3d_Components/Laptop/App'
import { TimelineDemo } from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
import Landing from './components/Landing/App.jsx'
import Footer from './components/Footer/App'
import { Link } from 'react-scroll' // Import from react-scroll
import { BentoGridDemo } from './components/Skills/App'
import Team from './components/Team/App'
import LeetCodeProgress from './components/Leetcode/App.jsx'
import Github from './components/Github/App.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarDemo />
        <div id='home'>
            <Landing/>
        </div>

      {/* <div id='projects'>
        <Laptop />
      </div> */}
      <div id='projects' className='bg-[#0a0a0a]'>
        <BentoGridDemo />
      </div>

      <div id='projects'>
        <Team />
      </div>
    
      <div id='leetcode'>
        <LeetCodeProgress />
      </div>

      <div id='github'>
        <Github />
      </div>

      <div id='jounry'>
        <TimelineDemo />
      </div>

      <div id='Footer'>
        <Footer />
      </div>

    </>
  )
}

export default App
