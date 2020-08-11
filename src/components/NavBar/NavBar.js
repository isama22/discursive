import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

  return (
    <div className="nav-bar">
      <Link className="link" to="/login">login</Link>
      <Link className="link" to="/signup">sign up</Link>
    </div>

  )
}

export default NavBar