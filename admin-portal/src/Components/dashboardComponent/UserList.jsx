import React from 'react'
import "../styles/UserList.css"
import image1 from '../../assets/Bora.png';

const Users = [
   {
      Image: image1,
      name:"Bora",
      status:"Active 2h ago",
      qualification: "BSc in physics",
   },
];
const UserList = () => {
  return (
    <div className='User--List'> 
    <div className='list--header'>
      <h2>Users</h2>
      <select>
         <option value="CA">Software</option>
         <option value="Developer">Dev</option>
      
      </select>
      </div>
      <div className='list--container'>
         {Users.map((user) =>(
            <div className= "list">
               <div className='User--details'>
               <img src={user.Image} alt={user.name}/>  
               <h2>{user.name}</h2> 
              </div>
              <span>{user.name}</span>
              <span>{user.status}</span>
              <span>{user.qualification}</span>
              
              <span className='user--todo'> :</span>
              </div>
            ))}
      </div>
    </div>
  );
};
 export default UserList;
