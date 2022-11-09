import React from 'react'
import Home from './Home';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404, We are sorry, the page you are trying to access does not exist on our website</h1>
        <Link className='link' to="/test">Go back to Home</Link>
        
     
    </div>
  )
}

export default NotFound;