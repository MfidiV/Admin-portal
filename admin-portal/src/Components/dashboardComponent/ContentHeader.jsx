// ContentHeader.jsx
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import '../styles/ContentHeader.css';

const ContentHeader = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Retrieve the imageName from local storage
    const storedImageName = localStorage.getItem('photo');

    // Load the image dynamically using import()
    if (storedImageName) {
      // Fetch the image directly from the backend
      setImageSrc(`http://localhost:5000/uploads/${storedImageName}`);
    }
  }, []); 

  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
      <div className='header--activity'> 
        <div className='search-box'>
          <input type="text" placeholder="Search for a user..."/> 
          <BiSearch className='ico'/>
        </div>
        <div className='notify'>
          {/* Render the image using the imageSrc state */}
          {imageSrc && <img src={imageSrc} alt="Admin" height="50" width="50" />}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
