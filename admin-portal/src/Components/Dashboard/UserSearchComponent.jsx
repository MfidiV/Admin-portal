import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming use of a library like Axios for API calls

function UserSearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all users initially (optional)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/api/users'); // Adjust URL based on your backend setup
        setSearchResults(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTerm) {
      // Handle empty search case (optional: display a message or show all users)
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(`/api/users?search=${searchTerm}`); // Adjust URL for search query
      setSearchResults(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>
              {/* Display relevant user information here */}
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found matching your search.</p>
      )}
    </div>
  );
}

export default UserSearchComponent;
