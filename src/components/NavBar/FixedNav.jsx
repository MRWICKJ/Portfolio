import React, { useState } from "react";

import { Menu, MenuItem } from "./NavUi"; 
import { cn } from "../../utils/utils";
import { IoHome } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
// import logo from '../../assets/logo.png'
// import { IoIosArrowDown } from "react-icons/io";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const getActiveClass = (path) =>
    location.pathname === path
      ? "text-blue-500 font-bold"
      : "text-white";

  return (
    <div className={cn("fixed inset-x-0 max-w-full mx-auto z-50", className)}>
      {/* Mobile Menu Button */}
      <button
        className="block lg:hidden p-2 text-white absolute top-4 right-4"
        onClick={() => setIsDrawerOpen(true)}
      >
        <IoMenu className="text-4xl"/>
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-transform transform ${
          isDrawerOpen ? "translate-x-100" : "translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="w-full bg-[#111] h-full p-12 text-2xl flex">
          <button
            className="text-white text-xl absolute top-4 right-4"
            onClick={() => setIsDrawerOpen(false)}
          >
            <IoCloseSharp className="text-4xl"/>
          </button>
          <div className="flex flex-col space-y-4">
            <a
              to="/home"
              className={cn("text-md transition-colors duration-300", getActiveClass("/home"))}
              onClick={() => setIsDrawerOpen(false)}
            >
              <IoHome className="inline-block mr-2 mb-2" />
              Home
            </a>
            <a
              to="/projects"
              className={cn("text-md transition-colors duration-300", getActiveClass("/projects"))}
              onClick={() => setIsDrawerOpen(false)}
            >
              <TbReportAnalytics className="inline-block mr-2 mb-2" />
              Projects
            </a>
            <a
              to="/announcements"
              className={cn("text-md transition-colors duration-300", getActiveClass("/announcements"))}
              onClick={() => setIsDrawerOpen(false)}
            >
              <TfiAnnouncement className="inline-block mr-2 mb-2" />
              Announcements
            </a>
            <div className="flex flex-col space-y-4 text-2xl">
              <a
                className="text-white hover:text-blue-500"
                to="/login"
                onClick={() => setIsDrawerOpen(false)}
              >
                <FaUser className="inline-block mr-2 mb-2" />
                Login
              </a>
              <a
                className="text-white hover:text-blue-500"
                to="/dashboard"
                onClick={() => setIsDrawerOpen(false)}
              >
                <MdDashboard className="inline-block mr-2 mb-2" />
                Dashboard
              </a>
              <a
                className="text-white hover:text-blue-500"
                to="/settings"
                onClick={() => setIsDrawerOpen(false)}
              >
                <IoSettings className="inline-block mr-2 mb-2" />
                Settings
              </a>
            </div>
            <a
              to="/apply"
              className={cn(
                "text-md px-2 py-0.5 rounded-md transition-colors duration-300",
                location.pathname === "/apply" ? "bg-blue-600 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
              )}
              onClick={() => setIsDrawerOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Full Navbar for larger screens */}
      <div className="hidden lg:flex">
          
        <Menu setActive={setActive}>
          <div className="absolute left-8">
             {/* <img src={logo} alt={logo} className="h-6 w-6"/> */}
          </div>
          <a
            to="/home"
            className={cn("text-sm pt-1 transition-colors duration-300", getActiveClass("/home"))}
          >
            <IoHome className="inline-block mr-2 mb-2" />
            Home
          </a>
          <a
            to="/projects"
            className={cn("text-sm pt-1 transition-colors duration-300", getActiveClass("/projects"))}
          >
            <TbReportAnalytics className="inline-block mr-2 mb-2" />
            Projects
          </a>
          <a
            to="/announcements"
            className={cn("text-sm pt-1 transition-colors duration-300", getActiveClass("/announcements"))}
          >
            <TfiAnnouncement className="inline-block mr-2 mb-2" />
            Announcements
          </a>
          <MenuItem setActive={setActive} active={active} item="Others">
            <div className="flex flex-col space-y-4 text-sm">
              <a
                className="text-white hover:text-blue-500"
                to="/login"
              >
                <FaUser className="inline-block mr-2 mb-2" />
                Login
              </a>
              <a
                className="text-white hover:text-blue-500"
                to="/dashboard"
              >
                <MdDashboard className="inline-block mr-2 mb-2" />
                Dashboard
              </a>
              <a
                className="text-white hover:text-blue-500"
                to="/settings"
              >
                <IoSettings className="inline-block mr-2 mb-2" />
                Settings
              </a>
            </div>
          </MenuItem>
          <a
            to="/apply"
            className={cn(
              "text-md px-2 py-0.5 rounded-full transition-colors duration-300 text-sm",
              location.pathname === "/apply" ? "bg-blue-600 text-white" : "bg-transparent text-white hover:bg-stone-800 hover:text-white border-y-white/[0.3] border px-3 py-1"
            )}
          >
            Register
          </a>
        </Menu>
      </div>
    </div>
  );
}