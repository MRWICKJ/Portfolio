import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Icon for GitHub link

const App = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchReposAndProfile = async () => {
      try {
        setLoading(true);
        // Fetch repositories and profile data in parallel
        const [repoResponse, profileResponse] = await Promise.all([
          axios.get('https://api.github.com/users/anuragjh/repos'),
          axios.get('https://api.github.com/users/anuragjh')
        ]);

        setRepos(repoResponse.data);
        setProfile(profileResponse.data);
      } catch (error) {
        setError('Failed to fetch data.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReposAndProfile();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex justify-center items-center">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen text-white p-5">
      <ProfileSection profile={profile} />
      <RepoList repos={repos} />
    </div>
  );
};

// Profile Section Component with Hover Animation
const ProfileSection = ({ profile }) => (
  <div className="flex items-center mb-8 space-x-6 transition-transform duration-300 hover:scale-105">
    <img
      src={profile.avatar_url}
      alt="Profile"
      className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-lg"
    />
    <div>
      <h1 className="text-4xl font-extrabold">{profile.name}</h1>
      <p className="text-gray-300 text-lg mt-1">{profile.bio || "No bio available."}</p>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline flex items-center space-x-2 mt-4"
      >
        <FaGithub className="text-2xl" />
        <span>View GitHub Profile</span>
      </a>
    </div>
  </div>
);

// Repo List Component
const RepoList = ({ repos }) => (
  <>
    <h2 className="text-3xl font-bold mb-4">GitHub Repositories</h2>
    {repos.length === 0 ? (
      <p className="text-xl">No repositories found.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    )}
  </>
);

// Repo Card Component with Gradient Backgrounds and Hover Effect
const RepoCard = ({ repo }) => (
  <div className="p-5 rounded-lg shadow-lg bg-gradient-to-br from-gray-700 to-gray-800 transform hover:scale-105 transition-transform duration-200 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-2 text-white">{repo.name}</h3>
      <p className="text-sm text-gray-400 mb-4">{repo.description || "No description"}</p>
    </div>
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline mt-2 self-start"
    >
      View Repository
    </a>
  </div>
);

export default App;
