import { useState } from 'react'
import './App.css'
import Logo from './assets/react.svg'

import { TimelineDemo } from './components/Timeline/app'
import { NavbarDemo } from './components/NavBar/FixedNav'
import Landing from './Components/Landing/app.jsx'
import Footer from './components/Footer/App'
import { Link } from 'react-scroll' // Import from react-scroll
import { BentoGridDemo } from './components/Projects/App.jsx'
import Team from './components/Team/App'
import LeetCodeProgress from './components/Leetcode/App.jsx'
import Github from './components/Github/App.jsx'
import GithubCal from './components/GithubCalender/App.jsx'
import LeetcodeCal from './components/LeetcodeCalender/App.jsx'
import SkillsSection from './components/Skills/App.jsx'
import { TextHoverEffect } from './components/GlowText/ui.jsx'

function App() {
  return (
    <>
      <NavbarDemo />
      <div id='home'>
        <Landing />
      </div>

      <div id='projects' className='bg-[#0a0a0a] py-10'>
        <BentoGridDemo />
      </div>

      <div id='team' className='py-10'>
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

      <div id='journey' className='py-10'>
        <TimelineDemo />
      </div>

      <div id='footer' className='py-10'>
        <Footer />
      </div>
    </>
  );
}

export default App;
