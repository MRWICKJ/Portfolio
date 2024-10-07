import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReposAndProfile = async () => {
      try {
        const repoResponse = await axios.get(
          "https://api.github.com/users/anuragjh/repos"
        );
        const profileResponse = await axios.get(
          "https://api.github.com/users/anuragjh"
        );

        setRepos(repoResponse.data);
        setProfile(profileResponse.data);
        setLoading(false); // Data loaded
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false); // Data fetch error
      }
    };

    fetchReposAndProfile();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">
        <h2 className="text-3xl animate-pulse">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">
        <h2 className="text-red-500 text-2xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white p-8">
      {/* Profile Section */}
      <div className="flex items-center mb-6 space-x-6">
        <img
          src={profile.avatar_url}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-700"
        />
        <div>
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="text-gray-400">{profile.bio || "No bio available"}</p>
          <div className="flex space-x-4 text-sm mt-2">
            {profile.location && (
              <p className="text-gray-400">
                <strong>Location:</strong> {profile.location}
              </p>
            )}
            <p className="text-gray-400">
              <strong>Followers:</strong> {profile.followers}
            </p>
          </div>
        </div>
      </div>

      {/* Repositories Section */}
      <h2 className="text-2xl font-semibold mb-4">GitHub Repositories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
            <p className="text-gray-400 text-sm mt-2">
              {repo.description || "No description available"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-500 hover:underline mt-4"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
