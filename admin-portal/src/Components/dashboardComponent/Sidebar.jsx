import React, { useState, useEffect } from 'react';
import AddUser from '../Dashboard/Adduser';
import AddAdmin from '../Dashboard/Admin/Admin/AddAdmin';
import { BiHome, BiBookAlt } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { FaUsersViewfinder } from "react-icons/fa6";
import "../styles/dashboard.css";

const Sidebar = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [isFullRole, setIsFullRole] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'full') {
      setIsFullRole(true);
    }
  }, []);

  const handleAddUserClick = () => {
    setShowAddUserModal(true);
  };

  const handleAddAdminClick = () => {
    setShowAddAdminModal(true);
  };

  const handleCloseModal = () => {
    setShowAddUserModal(false);
    setShowAddAdminModal(false);
  };

  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt className='logo-icon'/>
        <h2>VB</h2>
      </div>
      <div className='menu-list'>
        <a href="#" className="item">
          <BiHome className='ico'/>
          Home
        </a>
        <a href="#" className='item' onClick={handleAddUserClick}>
          <IoPersonAdd className='ico'/>
          Add user
        </a>
       
        {isFullRole && ( // Render the "Add admin" button only if the role is "full"
          <a href="#" className='item' onClick={handleAddAdminClick}>
            <IoPersonAdd className='ico'/>
            Add admin
          </a>
        )}

        <a href="#" className='item'>
          <FaUsersViewfinder className='ico'/>
          View users
        </a>
        <a href="#" className='item'>
          <MdAutoDelete/>
          Delete
        </a>
        <a href="#" className='item'>
          <GrUpdate className='ico'/>
          Updates
        </a>
        <a href="#" className='item'>
          <IoIosSearch className='ico'/>
          Search
        </a>
      </div>

      {showAddUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <AddUser />
          </div>
        </div>
      )}

      {showAddAdminModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <AddAdmin handleCloseModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
