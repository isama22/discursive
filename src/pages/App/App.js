import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'
import userService from '../../utils/userService';



class App extends Component {

  state = {
    user: userService.getUser(),
    // posts: []
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render() {
    return (
      <div className="App">

        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}>
          </Route>
          <Route
            exact path="/login"
            render={({ history }) => (
              <Loginpage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}>
          </Route>
          <Route exact path='/signup' render={({ history }) => 
            <Signuppage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
