import React from 'react'
// import { Link } from 'react-router-dom'
import './Signuppage.css'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signuppage = (props) => {

  return (
    <div className="signup-container">
      <div className="Signup-page">
        <p>sign up page</p>
        <SignupForm />
      </div>
    </div>

  )
}

export default Signuppage