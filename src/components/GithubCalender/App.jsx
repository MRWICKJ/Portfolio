import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubCal() {
  return (
    <div className="flex flex-col items-center py-12 bg-[#0a0a0a] text-white">
      {/* Title with Gradient Effect */}
      <h1 className="text-3xl sm:text-5xl font-extrabold pb-8 text-center tracking-wider">
        Days I <strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Code</strong>
      </h1>

      {/* Calendar Wrapper */}
      <div className="p-6 bg-[#111] rounded-2xl shadow-lg transform transition-all duration-300 hover:translate-y-2 hover:shadow-2xl hover:scale-105">
        <GitHubCalendar
          username="anuragjh"
          blockSize={17}
          blockMargin={6}
          color="#c084f5"
          fontSize={16}
        />
      </div>

      {/* Subtle Hover Effect for Contribution Blocks */}
      <style jsx>{`
        .react-github-calendar__day {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .react-github-calendar__day:hover {
          transform: scale(1.2);
          filter: brightness(1.4);
          box-shadow: 0 0 8px 4px rgba(192, 132, 245, 0.6);
        }
      `}</style>
    </div>
  );
}

export default GithubCal;
