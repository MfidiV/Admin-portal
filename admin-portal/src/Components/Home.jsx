import React, { useState, useEffect } from 'react';
import AddUser from './Dashboard/Adduser'; // Assuming AddUser component is defined in AddUser.js
import axios from 'axios'; // Import Axios

import "./home.css"

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        if (response.headers['content-type'] && response.headers['content-type'].startsWith('text/html')) {
          console.error('Unexpected response format from API. Response data is an HTML document.');
        } else {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  
  }, []);
  

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleAddUserClick}>Add User</button>

      <div>
        <h2>User Information</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>ID Number</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.idNumber}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <AddUser />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
