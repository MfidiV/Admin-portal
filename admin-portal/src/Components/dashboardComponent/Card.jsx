import React from 'react';
import { BiLogoHtml5, BiBuilding, BiAccessibility, BiAbacus } from 'react-icons/bi';

const course = [
   {
      title: 'Web Dev',
      icon: <BiLogoHtml5 />,
   },
   {
      title: "Data Structures & Algorithms",
      url:'https://www.freecodecamp.org/learn/data-structures-algorithms',
      icon: <BiLogoHtml5 />
   },

   {
      title:  'Software Engineering',
      //url: '',
      icon: <BiBuilding />
   },

   {
      title: "UI/UX Design",
      url:"https://www.figma.com/file/qJm6g8jcT3Ss9YlwRiNh0H/FCC?node-id=1%3A2",
      icon: <BiAbacus />
      
   },
];

const Card = () => {
  return ( <div className='card-container'> 
            {course.map((item) => (
               <div className="card">
               <div className='card--cover'>{item.icon}</div>
               <div className='card--title'> 
               <h2>item.title</h2>
               </div>
               </div>
            ))}
           </div>
           );
         };
             
      
export default Card;
