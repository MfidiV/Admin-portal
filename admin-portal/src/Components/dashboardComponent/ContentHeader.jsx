import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import '../styles/ContentHeader.css';

const ContentHeader = () => {
  const [adminPhoto, setAdminPhoto] = useState('');

  useEffect(() => {
    const photo = localStorage.getItem('photo');
    if (photo) {
      // Construct the URL for the image based on the photo string
      setAdminPhoto(`/uploads/${photo}`);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
      <div className='header--activity'> 
        <div className='search-box'>
          <input type="text" placeholder="Search for a user..."/> 
          <BiSearch className='ico'/>
        </div>
        <div className='notify'>
          {adminPhoto && <img src={adminPhoto} alt="Admin" height="50" width="50" />} {/* Render admin photo if available */}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
