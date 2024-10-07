import { useState } from 'react';
import './App.css';

import { TimelineDemo } from './components/Timeline/app';
import { NavbarDemo } from './components/NavBar/FixedNav';
import Landing from './components/Landing/App.jsx';
import Footer from './components/Footer/App';
import { Link } from 'react-scroll';
import { BentoGridDemo } from './components/Projects/App.jsx';
import Team from './components/Team/App';
import LeetCodeProgress from './components/Leetcode/App.jsx';
import Github from './components/Github/App.jsx';
import GithubCal from './components/GithubCalender/App.jsx';
import LeetcodeCal from './components/LeetcodeCalender/App.jsx';

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

      <div id='leetcode' className='py-10'>
        <LeetCodeProgress />
      </div>

      <div id='leetcodeCal' className='py-10'>
        <LeetcodeCal />
      </div>

      <div id='github' className='py-10'>
        <Github />
      </div>

      <div id='githubCal' className='py-10'>
        <GithubCal />
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
