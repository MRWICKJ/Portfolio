import React, { useEffect, useState } from "react";
import {
  FaMedal,
  FaChartLine,
  FaTrophy,
  FaCheckCircle,
  FaListAlt,
} from "react-icons/fa";
import { RiCopperCoinFill } from "react-icons/ri";
import PropTypes from "prop-types";

const LeetCodeProgress = () => {
  const [progress, setProgress] = useState(null);
  const [badgesData, setBadgesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-api-faisalshohag.vercel.app/aman_starts")
      .then((response) => response.json())
      .then((data) => {
        setProgress(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });

    fetch("https://alfa-leetcode-api.onrender.com/aman_starts/badges")
      .then((response) => response.json())
      .then((data) => {
        setBadgesData(data);
      })
      .catch((error) => {
        console.error("Failed to fetch badges:", error);
      });
  }, []);

  if (loading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!progress) return <div>No data available.</div>;

  return (
    <div className="dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container mx-auto p-6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-6xl">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProgressCard
            title="Total Solved"
            value={progress.totalSolved}
            bgColor="from-blue-400 to-blue-600"
            icon={<FaCheckCircle />}
          />
          <ProgressCard
            title="Easy Solved"
            value={progress.easySolved}
            bgColor="from-green-400 to-green-600"
            icon={<FaListAlt />}
          />
          <ProgressCard
            title="Medium Solved"
            value={progress.mediumSolved}
            bgColor="from-yellow-400 to-yellow-600"
            icon={<FaChartLine />}
          />
          <ProgressCard
            title="Hard Solved"
            value={progress.hardSolved}
            bgColor="from-red-400 to-red-600"
            icon={<FaTrophy />}
          />
          <ProgressCard
            title="Contribution Point"
            value={`${progress.contributionPoint}`}
            bgColor="from-indigo-400 to-indigo-600"
            icon={<RiCopperCoinFill />}
          />
          <ProgressCard
            title="Rank"
            value={progress.ranking}
            bgColor="from-purple-400 to-purple-600"
            icon={<FaMedal />}
          />
        </div>

        {/* Badge Showcase Section */}
        {badgesData && (
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-700 dark:text-white my-10">Badges</h1>

            {/* Earned Badges */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">Earned Badges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {badgesData.badges.map((badge, index) => (
                  <BadgeCard key={index} badge={badge} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgressCard = ({ title, value, bgColor, icon }) => (
  <div
    className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${bgColor} text-white transform hover:scale-105 transition-transform duration-300 ease-in-out`}
  >
    <div className="flex items-center mb-4">
      <div className="text-4xl">{icon}</div>
      <h2 className="ml-4 text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-6xl font-bold mt-2">{value}</p>
  </div>
);

const BadgeCard = ({ badge }) => (
  <div className="p-6 rounded-lg shadow-lg bg-[#111] dark:bg-[#1a1a1a] text-white text-center transition-transform transform hover:scale-105 duration-300">
    <img
      src={badge.icon.startsWith("http") ? badge.icon : `https://leetcode.com${badge.icon}`}
      alt={badge.displayName || badge.name}
      className="w-28 h-28 mx-auto mb-4"
    />
    <h2 className="text-lg font-semibold">{badge.displayName || badge.name}</h2>
    {badge.creationDate && (
      <p className="text-gray-400 text-sm mt-1">Earned on {new Date(badge.creationDate).toLocaleDateString()}</p>
    )}
  </div>
);

ProgressCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

BadgeCard.propTypes = {
  badge: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    name: PropTypes.string,
    creationDate: PropTypes.string,
  }).isRequired,
};

export default LeetCodeProgress;
