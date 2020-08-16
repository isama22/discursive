import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import PostDetail from '../../pages/PostDetail/PostDetail'
import Contact from '../../pages/Contact/Contact'
import Loginpage from '../../pages/Loginpage/Loginpage'
import Signuppage from '../../pages/Signuppage/Signuppage'
import AddPostPage from '../../pages/AddPostPage/AddPostPage'
import EditPage from '../../pages/EditPage/EditPage'
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

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postsAPI.update(updatedPostData)
    const newPostsArray = this.state.posts.map(e =>
      e._id === updatedPost._id ? updatedPost : e
    )
    this.setState(
      { posts: newPostsArray },
      () => this.props.history.push('/')
    )
  }

  handleDeletePost = async id => {
    await postsAPI.deleteOne(id)
    this.setState(state => ({
      posts: state.posts.filter(post => post._id !== id)
    }), () => this.props.history.push('/'))
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
                <Redirect to='/login' />}
          />
          <Route
            exact path="/edit"
            render={({ location }) =>
              userService.getUser() ?
                <EditPage
                  handleUpdatePost={this.handleUpdatePost}
                  location={location}
                  user={this.state.user}
                />
                :
                <Redirect to='/login' />
            }
          />
          <Route
            exact path="/detailpage"
            render={({ location }) => (
              <PostDetail
              location={location}
              user={this.state.user}
              posts={this.state.posts}
              handleAddPost={this.handleAddPost}
              />
              )} />
              <Route
                exact path="/contact"
                render={() => (
                  <Contact
                  />
                )} />
        </Switch>
      </div>
    );
  }
}

export default App;
