// import React from 'react'
// import { Link } from 'react-router-dom'
// import './NavBar.css'

// const NavBar = (props) => {

//   return (
//     <div className="nav-bar">
//       <Link className="link" to="/login">login</Link>
//       <Link className="link" to="/signup">sign up</Link>
//     </div>

//   )
// }

// export default NavBar

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>
  );
};

export default NavBar;