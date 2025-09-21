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
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we can't find the user.</p>}
      {user && (
        <div className="mt-4 border p-4 rounded shadow">
          <img src={user.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-center mt-2 font-bold">{user.name || user.login}</h2>
          <p className="text-center">
            <a href={user.html_url} target="_blank" className="text-blue-500 underline">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
