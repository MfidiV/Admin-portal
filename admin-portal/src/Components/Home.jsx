import React, { useState } from 'react';
import AddUser from './Dashboard/Adduser'; // Assuming AddUser component is defined in AddUser.js

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleAddUserClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleAddUserClick}>Add User</button>
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
