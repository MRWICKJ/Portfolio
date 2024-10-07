import React, { useState } from "react";
import { Menu } from "./NavUi"; 
import { cn } from "../../utils/utils";
import { IoHome, IoCloseSharp, IoMenu, IoSettings } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrAchievement } from "react-icons/gr";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { GiJourney } from "react-icons/gi";
import { Link } from "react-scroll";  // Import from react-scroll for smooth scrolling

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={cn("fixed inset-x-0 max-w-full mx-auto z-50", className)}>
      
      {/* Mobile Menu Button */}
      <button
        className="block lg:hidden p-2 text-white absolute top-4 right-4"
        onClick={() => setIsDrawerOpen(true)}
      >
        <IoMenu className="text-4xl"/>
      </button>

      {/* Drawer for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="w-full bg-[#0a0a0a] h-full p-12 text-2xl flex">
          <button
            className="text-white text-xl absolute top-4 right-4"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IoCloseSharp className="text-4xl"/>
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="text-white transition-colors duration-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              <IoHome className="inline-block mr-2 mb-2" />
              Home
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="text-white transition-colors duration-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              <TbReportAnalytics className="inline-block mr-2 mb-2" />
              Projects
            </Link>
            <Link
              to="achievements"
              smooth={true}
              duration={1000}
              className="text-white transition-colors duration-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              <TfiAnnouncement className="inline-block mr-2 mb-2" />
              Announcements
            </Link>
            <Link
              to="journey"
              smooth={true}
              duration={1000}
              className="text-white transition-colors duration-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              <GiJourney className="inline-block mr-2 mb-2" />
              Journey
            </Link>
            <a
              href="/login"
              className="text-white hover:text-blue-500"
              onClick={() => setIsDrawerOpen(false)}
            >
              <FaUser className="inline-block mr-2 mb-2" />
              Login
            </a>
            <a
              href="/dashboard"
              className="text-white hover:text-blue-500"
              onClick={() => setIsDrawerOpen(false)}
            >
              <MdDashboard className="inline-block mr-2 mb-2" />
              Dashboard
            </a>
            <a
              href="/settings"
              className="text-white hover:text-blue-500"
              onClick={() => setIsDrawerOpen(false)}
            >
              <IoSettings className="inline-block mr-2 mb-2" />
              Settings
            </a>
            <a
              href="/apply"
              className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-md"
              onClick={() => setIsDrawerOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Full Navbar for larger screens */}
      <div className="hidden lg:flex items-center space-x-6 bg-[#0a0a0a] p-2 ">
        <Menu>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="text-white transition-colors duration-300"
          >
            <IoHome className="inline-block mr-2 mb-1" />
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="text-white transition-colors duration-300"
          >
            <TbReportAnalytics className="inline-block mr-2 mb-1" />
            Projects
          </Link>
          <Link
            to="achievements"
            smooth={true}
            duration={1000}
            className="text-white transition-colors duration-300"
          >
            <GrAchievement className="inline-block mr-2 mb-1" />
            Achievements
          </Link>
          <Link
            to="journey"
            smooth={true}
            duration={1000}
            className="text-white transition-colors duration-300"
          >
            <GiJourney className="inline-block mr-2 mb-1" />
            Journey
          </Link>
          <a
            href="#contact"
            className="bg-[#999] text-[#111] hover:bg-stone-600 hover:text-white px-3 py-1 rounded-full"
          >
            <PiContactlessPaymentFill className="inline-block mr-2 mb-1"/>
            Let's Connect
          </a>
        </Menu>
      </div>
    </div>
  );
}
