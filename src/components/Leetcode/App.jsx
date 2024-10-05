import React, { useEffect, useState } from 'react';

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
    <div className="dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-5 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-md">
        {/* Profile Photo */}
        <div className="flex items-center mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/141364632?v=4"
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4 border-4 border-gray-300 dark:border-gray-700"
        />
        <h1 className="text-4xl font-bold text-white">Aman Jha</h1>
      </div>
        

        <h1 className="text-2xl font-bold text-center text-gray-700 dark:text-white mb-4">
          LeetCode Progress
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Total Solved</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.totalSolved}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Easy Solved</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.easySolved}</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Medium Solved</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.mediumSolved}</p>
          </div>
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Hard Solved</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.hardSolved}</p>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Acceptance Rate</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.acceptanceRate}%</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Rank</h2>
            <p className="text-3xl text-gray-800 dark:text-white">{progress.ranking}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeProgress;
