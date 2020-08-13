import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'
import AddPostPage from '../../pages/AddPostPage/AddPostPage'
import userService from '../../utils/userService';


class App extends Component {

  state = {
    user: userService.getUser(),
    posts: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
}

  render() {
    return (
      <div className="App">

        <Switch>

          <Route
            exact path="/"
            render={({history}) => (
              <Home
                user={this.state.user}
                posts={this.state.posts}
                handleAddPost={this.handleAddPost}
                handleSignupOrLogin={this.handleSignupOrLogin}
                handleLogout={this.handleLogout}

              />
            )}>

            {/* <Route
              exact path="/"
              render={(props) => (
                <Home
                  {...props}
                  posts={this.state.posts}
                />
              )}> */}


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
            } />
            <Route
              exact path="/addpost"
              render={() =>
                <AddPostPage
                  handleAddPost={this.handleAddPost}
                />
              }
            />
        </Switch>
      </div>
        );
      }
    }
    
    export default App;
