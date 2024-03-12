import React, { useState } from 'react';
import { BiBookAlt, BiHome } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";
import AddUser from '../Dashboard/Adduser';
import DeleteUser from '../Dashboard/DeleteUsers';
import "../styles/dashboard.css";

const Sidebar = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);

  const handleAddUserClick = () => {
    setShowAddUserModal(true);
  };

  const handleDeleteUserClick = () => {
    setShowDeleteUserModal(true);
  };

  const handleCloseAddUserModal = () => {
    setShowAddUserModal(false);
  };

  const handleCloseDeleteUserModal = () => {
    setShowDeleteUserModal(false);
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

       
        <a href="#" className='item'  onClick={handleDeleteUserClick}>
          <MdAutoDelete/>
          Delete
        </a>
        <a href="#" className='item'>
          <GrUpdate className='ico'/>
          updates
        </a>
        <a href="#" className='item'>
          <IoIosSearch className='ico'/>
          search
        </a>
      </div>

      {showAddUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseAddUserModal}>
              &times;
            </span>
            <AddUser />
          </div>
        </div>
      )}

      {showDeleteUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseDeleteUserModal}>
              &times;
            </span>
            <DeleteUser />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
