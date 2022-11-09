import React from 'react'
import {Link} from 'react-router-dom';

function Home (){
  return (
    <div className='home'>
           <h1>Hey, Welcome to our new Website</h1>
           
           <Link to="/people" className='add-btn'>Add a new Employee</Link>
    </div>
  )
}

export default Home;
