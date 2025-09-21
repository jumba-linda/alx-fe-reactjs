import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}
      {user && (
        <div className="mt-6 text-center">
          <img
            src={user.avatar_url}
            alt="User avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-2 font-semibold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
