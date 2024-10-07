import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRust,
  FaJava,
  FaAndroid,
  FaCode, // Use FaCode for C
} from "react-icons/fa";
import { SiFastapi, SiPandas, SiNumpy, SiTailwindcss, SiFirebase, SiSpringboot } from "react-icons/si";
import { TextHoverEffect } from "../GlowText/ui";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Updated skills data
const skillsData = [
  {
    name: "Java",
    level: 100,
    color: "#007396",
    icon: <FaJava className="w-5 h-5 inline-block" />,
  },
  {
    name: "Python",
    level: 70,
    color: "#f7cd43",
    icon: <FaPython className="w-5 h-5 inline-block" />,
  },
  {
    name: "Android",
    level: 90,
    color: "#A4C639",
    icon: <FaAndroid className="w-5 h-5 inline-block" />,
  },
  {
    name: "C",
    level: 70,
    color: "#a8b9cb",
    icon: <FaCode className="w-5 h-5 inline-block" />, // Updated icon
  },
  {
    name: "SQL",
    level: 60,
    color: "#0876c8",
    icon: <FaDatabase className="w-5 h-5 inline-block" />,
  },
  {
    name: "Firebase",
    level: 85,
    color: "#FFCA28",
    icon: <SiFirebase className="w-5 h-5 inline-block" />,
  },
  {
    name: "Spring Boot",
    level: 70,
    color: "#6DB33F",
    icon: <SiSpringboot className="w-5 h-5 inline-block" />,
  },
  {
    name: "React",
    level: 50,
    color: "#5ed3f3",
    icon: <FaReact className="w-5 h-5 inline-block" />,
  },
  {
    name: "Web/MERN",
    level: 60,
    color: "#4D4D4D",
    icon: <FaNodeJs className="w-5 h-5 inline-block" />,
  },
  {
    name: "JavaScript",
    level: 80,
    color: "#f5d33c",
    icon: <FaJs className="w-5 h-5 inline-block" />,
  },
  {
    name: "Tailwind CSS",
    level: 70,
    color: "#1ebbbd",
    icon: <SiTailwindcss className="w-5 h-5 inline-block" />,
  },
];

// Generate pie chart data
const pieChartData = {
  labels: skillsData.map((skill) => skill.name),
  datasets: [
    {
      data: skillsData.map((skill) => skill.level),
      backgroundColor: skillsData.map((skill) => skill.color),
      hoverBackgroundColor: skillsData.map((skill) => skill.color),
    },
  ],
};

const SkillsSection = () => {
  return (
    <div className="bg-[#0a0a0a] text-zinc-400 p-6 shadow-lg">
      <TextHoverEffect text="SKILLS" id="skill" size={5} />
      <div className="flex flex-col md:flex-row gap-7">
        {/* First Column for Progress Bars */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Progress Bars</h3>
          {skillsData.slice(0, 6).map((skill, index) => (
            <div key={index} className="mb-6">
              <span className="block mb-1 font-medium">
                {skill.name} {skill.level}% <span style={{ color: skill.color }}>{skill.icon}</span>
              </span>

              <div className="bg-gray-700 rounded-full h-4">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color, // Set color for the progress bar
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Column for Progress Bars */}
        <div className="w-full md:w-1/4 mt-11 md:mb-0">
          {skillsData.slice(6).map((skill, index) => (
            <div key={index} className="mb-6">
              <span className="block mb-1 font-medium">
                {skill.name} {skill.level}% <span style={{ color: skill.color }}>{skill.icon}</span>
              </span>
              <div className="bg-gray-700 rounded-full h-4">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color, // Set color for the progress bar
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart - 50% Width */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div style={{ width: "400px", height: "400px" }}>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
