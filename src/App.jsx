import { useState } from 'react'
import './App.css'
import Logo from './assets/react.svg'
import Laptop from './3d_Components/Laptop/App'
import { TimelineDemo } from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
import Landing from './components/Landing/App.jsx'
import Footer from './components/Footer/App'
import { Link } from 'react-scroll' // Import from react-scroll
import { BentoGridDemo } from './components/Projects/App.jsx'
import Team from './components/Team/App'
import LeetCodeProgress from './components/Leetcode/App.jsx'
import Github from './components/Github/App.jsx'
import GithubCal from './components/GithubCalender/App.jsx'
import LeetcodeCal from './components/LeetcodeCalender/App.jsx'

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

      <div id='team'>
        <Team />
      </div>
    
      <div id='leetcode'>
        <LeetCodeProgress />
      </div>
      <div id='leetcode'>
        <LeetcodeCal />
      </div>

      <div id='github'>
        <Github />
      </div>

      <div id='github'>
        <GithubCal />
      </div>

      <div id='journey'>
        <TimelineDemo />
      </div>

      <div id='Footer'>
        <Footer />
      </div>

    </>
  )
}

export default App
