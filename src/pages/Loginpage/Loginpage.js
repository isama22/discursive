import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/')
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="log">
        <header className="header-footer">Log In</header>
      <div className="LoginPage">
      <div className="login-div">
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
            <label className='form-label'>email</label>
              <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
            <label className='form-label'>password</label>
              <input type="password" className="form-control" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="login-links text-center">
              <Link className='cancel-button' to='/'>Cancel</Link>
              <button className="login-btn">Log In</button>&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default LoginPage;
