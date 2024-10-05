import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchReposAndProfile = async () => {
      try {
        // Fetch repositories with visibility set to all
        const repoResponse = await axios.get('https://api.github.com/users/MRWICKJ/repos?visibility=all', {
          headers: {
            Authorization: `SHA256 jnZWWBcjtSszBul+ocp0InvJBJ5712Kr1ibMZawlFqk`, // Use your token here
          },
        });

        // Fetch user profile
        const profileResponse = await axios.get('https://api.github.com/users/MRWICKJ');
        
        setRepos(repoResponse.data);
        setProfile(profileResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReposAndProfile();
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white p-6">
      <div className="flex items-center mb-6">
        <img
          src={profile.avatar_url}
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4 border-4 border-gray-300 dark:border-gray-700"
        />
        <h1 className="text-4xl font-bold">{profile.name}</h1>
      </div>

      <h2 className="text-2xl font-semibold mb-4">GitHub Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-400">{repo.description || "No description"}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
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
