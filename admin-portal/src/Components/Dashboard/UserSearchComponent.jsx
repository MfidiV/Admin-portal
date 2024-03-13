import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls

const UserSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState(''); // User's search input
  const [searchResult, setSearchResult] = useState(null); // Holds the searched user information
  const [error, setError] = useState(null); // Stores any errors

  useEffect(() => {
    // Consider fetching all users on component mount for initial display
     const fetchData = async () => {
     try {
        const response = await axios.get('http://localhost:5000/api/users/${userId}'); // Assuming your API endpoint
         setUsers(response.data); // Example: storing all users if needed
      } catch (error) {
        console.error('Error fetching users:', error);
      }
     };
     fetchData();
  }, []); // Empty dependency array (optional for initial data fetch)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchResult(null); // Reset search result on new search
    setError(null); // Clear previous error
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!searchQuery) {
      setError('Please enter an ID number to search.');
      return; // Early return if no search query
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`); // Assuming your API endpoint
      setSearchResult(response.data); // Set the searched user information
    } catch (error) {
      setError(error.message || 'An error occurred while searching.');
    }
  };

  return (
    <div>
      <h2>Search User</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="searchId">ID Number:</label>
          <input
            type="text"
            id="searchId"
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div> 
        <button type="submit">Search</button>
      </form>

      {searchResult && (
        <div>
          <h4>Search Result</h4>
          {/* Display user details here (assuming the response object has relevant properties) */}
          <p>Name: {searchResult.name}</p>
          <p>ID Number: {searchResult.idNumber}</p>
          {/* Add more details as needed */}
        </div>
      )}
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default UserSearchComponent;
