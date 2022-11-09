import React from 'react'
import logo from './favicon.ico';
import {Link} from 'react-router-dom';


function Navbar (){
    return (
        <div className="app">
        
        <div>
      <img src={logo} alt="test"/> 
        </div>
    
        <div> 
    <ul>
      <li><Link to="/" >Home</Link></li>

      <li><Link to="/news">News</Link></li>
      <li><Link to="/people">People</Link></li>
      {/* <li><Link to="/visions">Vision</Link></li> */}
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    </div>
        </div>
      );
}

export default Navbar;
