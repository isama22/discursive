// import React from 'react'
// // import { Link } from 'react-router-dom'
// import './Signuppage.css'
// import SignupForm from '../../components/SignupForm/SignupForm'

// const Signuppage = (props) => {

//   return (
//     <div className="signup-container">
//       <div className="Signup-page">
//         <p>sign up page</p>
//         <SignupForm />
//       </div>
//     </div>

//   )
// }

// export default Signuppage

import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signuppage.css';

class Signuppage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Signuppage;