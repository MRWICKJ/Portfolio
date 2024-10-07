import { useState } from 'react'
import './App.css'
import Logo from './assets/react.svg'
import { TimelineDemo } from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
import Landing from './components/Landing/app'
import Footer from './components/Footer/App'
import { BentoGridDemo } from './components/Projects/App'
import Team from './components/Team/App'
import LeetCodeProgress from './components/Leetcode/App'
import Github from './components/Github/App'
import GithubCal from './components/GithubCalender/App'
import LeetcodeCal from './components/LeetcodeCalender/App'
import SkillsSection from './components/Skills/App'
import { TextHoverEffect } from './components/GlowText/ui'

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
      <div id='achievements' className='bg-[#0a0a0a]'>
        <TextHoverEffect text="ACHIEVEMENTS" id="Achievements" size={4}/>
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
      </div>

      <div id='skills'>
        <SkillsSection />
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
