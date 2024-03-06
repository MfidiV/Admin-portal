import React from 'react'
import {
  BiHome,
  BiBookAlt,
  
  } from "react-icons/bi";

  import { MdAutoDelete} from "react-icons/md";
  import { IoPersonAdd } from "react-icons/io5";
  import { GrUpdate } from "react-icons/gr";
  import { IoIosSearch } from "react-icons/io";
  import { FaUsersViewfinder } from "react-icons/fa6";

  import "../styles/dashboard.css"
 
const Sidebar = () => {
  return (
  <div className='menu'>
    <div className='logo'>
      <BiBookAlt className='logo-icon'/>
      <h2>VB</h2>
        </div>

        <div className='menu-list'>
          <a href="#" className='item'>
          <BiHome className='ico'/>
          Home
          </a>

          
          <a href="#" className='item'>
          <IoPersonAdd className='ico'/>
          Add user
          </a>

          <a href="#" className='item'>
          <FaUsersViewfinder className='ico'/>
          view users
            </a>

          <a href="#" className='item'>
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
      </div> 
    );
  };
export default Sidebar