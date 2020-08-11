import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'




class App extends Component {

  state = {

    // posts: []
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
            render={(props) => (
              <Loginpage
                {...props}
              />
            )}>
          </Route>
          <Route exact path='/signup' render={({ history }) => 
            <Signuppage
              history={history}
              
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
