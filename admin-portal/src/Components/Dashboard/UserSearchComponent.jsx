import React, { useState } from 'react';
import axios from 'axios';

const UserSearchComponent = () => {
  const [userIdNumber, setUserIdNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userIdNumber}`);

      if (response.status === 200) {
        setSearchResult(response.data);
      } else {
        setError('Failed to search for user.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="userIdNumber">User ID Number:</label>
          <input
            type="text"
            id="userIdNumber"
            value={userIdNumber}
            onChange={(e) => setUserIdNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      {searchResult && (
        <div>
          <h3>User Found</h3>
          <p>Name: {searchResult.name}</p>
          <p>ID Number: {searchResult.idNumber}</p>
          {/* Add more details as needed */}
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UserSearchComponent;
