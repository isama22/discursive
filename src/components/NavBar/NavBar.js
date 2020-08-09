import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

  return (
    <div className="nav-bar">
      <Link to="/login">login</Link>
      <Link to="/signup">sign up</Link>
      <Link to="/">home</Link>
    </div>

  )
}

export default NavBar