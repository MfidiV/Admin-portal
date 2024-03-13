import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/profileHeader.css';

const ProfileHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        // Redirect to login component page
        navigate('/Login');
    };

    return (
        <div className="profile-header">
            <h2 className='header-title'>Profile</h2>
            <div className='dropdown'>
                <div className="dropdown-toggle" onClick={toggleDropdown}>
                    {/* <BiEdit /> */}
                    <BsChevronDown className={`dropdown-arrow ${showDropdown ? 'open' : ''}`} />
                </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <button className="dropdown-item">Profile</button>
                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileHeader;
