import React from 'react'
import {BiSearch, BiNotification} from 'react-icons/bi';
import '../styles/ContentHeader.css'
const ContentHeader = () => {
  return (
   <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
         <div className='header--activity'> 
            <div className='search-box'>
               <input type="text" placeholder="Search for a user..."/> 
               <BiSearch className='ico'/>
               </div>

               <div className='notify'>
             <BiNotification className='ico'/>
       </div>
      </div>
    </div>
  );
};

export default ContentHeader
