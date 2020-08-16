import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="nav-container">
      <span className='NavBar-welcome'>ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚	{props.user.name}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>log out</Link>
    </div>
    :
    <div className="nav-container">
      <Link to='/login' className='NavBar-link'>log in</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;