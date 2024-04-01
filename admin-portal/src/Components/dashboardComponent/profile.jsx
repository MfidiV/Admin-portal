import React from 'react'
import ProfileHeader from './profileHeader'
import "../styles/Profile.css"
import useImage from '../../assets/react.svg'
import {BiBook} from 'react-icons/bi'
const courses =[
  {
    title: 'javaScript',
    duration:  '6 months',
    icon: <BiBook/>
  },

  {
    title: 'python',
    duration:  '6 months',
    icon: <BiBook/>
  },
  {
    title: 'java',
    duration:  '6 months',
    icon: <BiBook/>
  },

]

const Profile = () => {
  
  return ( 
    <div className='profile'>
     <ProfileHeader/>

    <div className='user-profile'>
      <div className='user-details'>
        <img src={useImage}/> 
        <h3 className='username'>Vuyolwethu</h3>
        <span className='Profession'>Software Developer</span>
      </div>

      <div className='user-courses'>
        {courses.map(courses=><div className='course'>
          <div className='course-details' >
            <div className='course-cover'>
              {courses.icon}
            </div>
            <div  className="course-name">
                <h5 className='title'>{ courses.title }</h5>
                <span  className='duration'>Duration : { courses.duration }</span>
            </div>
          </div>
          <div className='action'>:</div>
        </div>)}
      </div>
    </div>
  </div>
 )
}

export default Profile;