import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'
import NavBar from '../../components/NavBar/NavBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header><NavBar /></header>

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
            render={(props) => (
              <Loginpage
                {...props}
              />
            )}>
          </Route>
          <Route
            exact path="/signup"
            render={(props) => (
              <Signuppage
                {...props}
              />
            )}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
