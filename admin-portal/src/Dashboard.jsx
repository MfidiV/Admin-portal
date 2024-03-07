 import React from 'react'
 import Sidebar from './Components/dashboardComponent/Sidebar'
 import ContentHeader from './Components/dashboardComponent/ContentHeader'
 import Content from  './Components/dashboardComponent/content'
 import Profile  from './Components/dashboardComponent/profile'
 
 import './Components/styles/ContentHeader.css'
 
 const Dashboard = () => {
   return (
    <><div className='dashboard'> 
     <Sidebar />
     <div className="Dashboard--content">
      <Content/>
      <Profile/>
      </div>
      </div>
    </>
   )
 }
 export default Dashboard
 