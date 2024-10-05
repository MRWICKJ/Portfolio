import React, { useEffect, useState } from 'react';
import { FaMedal, FaChartLine, FaTrophy, FaCheckCircle, FaListAlt, FaPercent } from 'react-icons/fa';

const LeetCodeProgress = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/aman_starts')
      .then((response) => response.json())
      .then((data) => {
        setProgress(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container mx-auto p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl max-w-6xl">
        
        {/* Profile Section */}
        <div className="flex items-center mb-10">
          <img
            src="https://avatars.githubusercontent.com/u/80311301?v=4"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          />
          <div className="ml-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Aman Jha</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mt-2">LeetCode Enthusiast</p>
          </div>
        </div>

        {/* LeetCode Progress Section */}
        <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-white mb-10">LeetCode Progress</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/** Total Solved */}
          <ProgressCard 
            title="Total Solved" 
            value={progress.totalSolved} 
            bgColor="from-blue-400 to-blue-600" 
            icon={<FaCheckCircle />}
          />
          
          {/** Easy Solved */}
          <ProgressCard 
            title="Easy Solved" 
            value={progress.easySolved} 
            bgColor="from-green-400 to-green-600" 
            icon={<FaListAlt />}
          />

          {/** Medium Solved */}
          <ProgressCard 
            title="Medium Solved" 
            value={progress.mediumSolved} 
            bgColor="from-yellow-400 to-yellow-600" 
            icon={<FaChartLine />}
          />

          {/** Hard Solved */}
          <ProgressCard 
            title="Hard Solved" 
            value={progress.hardSolved} 
            bgColor="from-red-400 to-red-600" 
            icon={<FaTrophy />}
          />

          {/** Acceptance Rate */}
          <ProgressCard 
            title="Acceptance Rate" 
            value={`${progress.acceptanceRate}%`} 
            bgColor="from-indigo-400 to-indigo-600" 
            icon={<FaPercent />}
          />

          {/** Ranking */}
          <ProgressCard 
            title="Rank" 
            value={progress.ranking} 
            bgColor="from-purple-400 to-purple-600" 
            icon={<FaMedal />}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Progress Card Component with Icons and Hover Effects
const ProgressCard = ({ title, value, bgColor, icon }) => (
  <div
    className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${bgColor} text-white transform hover:scale-105 transition-transform duration-300 ease-in-out`}
  >
    <div className="flex items-center mb-4">
      <div className="text-3xl">{icon}</div>
      <h2 className="ml-4 text-lg font-semibold">{title}</h2>
    </div>
    <p className="text-5xl font-bold mt-2">{value}</p>
  </div>
);

export default LeetCodeProgress;
