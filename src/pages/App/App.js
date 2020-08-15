import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'
import AddPostPage from '../../pages/AddPostPage/AddPostPage'
import userService from '../../utils/userService';
import * as postsAPI from '../../services/posts-api'


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
  //posts functions//
  handleAddPost = async newPostData => {
    const newPost = await postsAPI.create(newPostData)
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }),
      () => this.props.history.push('/'))
  }
  handleGetAllPosts = async () => {
    const posts = await postsAPI.getAll()
    this.setState({ posts: posts })
  }
  //helper function//
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  //lifecycle functions//
  async componentDidMount() {
    const posts = await postsAPI.getAll()
    this.setState({ posts })
  }

  render() {
    return (
      <div className="App">

        <Switch>

          <Route
            exact path="/"
            render={({ history }) => (
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
              userService.getUser() ?
              <AddPostPage
                handleAddPost={this.handleAddPost}
              />
              :
              <Redirect to='/login' />
          
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
