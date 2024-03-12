import React, { useState, useEffect } from 'react';
import * as jwtDecode from 'jwt-decode';
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
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUserRole(decoded.role); // Extract and set user's role from JWT token
      console.log(decoded.role); // Check the role in the console
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
       
        {userRole !== 'partial' && (
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
