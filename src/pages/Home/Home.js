import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import PostItems from '../../components/PostItems/PostItems'
import * as postsAPI from '../../services/posts-api'

class Home extends Component {
    state = {
        posts: [],
        postComments: ''
    }


    // handlePostComponent() {
    //     // if (this.state.filteredServices.length === 0) {
    //     //   return this.props.services
    //     // } else {
    //       return this.state.posts
    //     // }
    //   }

    async componentDidMount() {
        const posts = await postsAPI.getAll()
        this.setState({ posts })
    }
    render() {


        return (
            <>
                <div className="Home">
                    <div className="image">
                        <div className="nav">
                            <NavBar
                                user={this.props.user}
                                handleLogout={this.props.handleLogout}
                                handleSignupOrLogin={this.props.handleSignupOrLogin}
                            />
                        </div>
                        <div className="main-container">
                            <div className="side-bar">
                                <div className="info">
                                    <Link to="/"><img className="title-photo"
                                        src="https://i.postimg.cc/9XBw0fy3/Screen-Shot-2020-05-27-at-12-41-22-AM.png" alt=""></img></Link>
                                </div>
                                <div className="info-body">
                                    <div className="add-service" >
                                        <Link className="add-service" to="/addpost">post something</Link>
                                    </div>
                                    <Link to="/contact">
                                        <img className="second-photo"
                                            src="https://i.stack.imgur.com/TsA97.gif" alt="">
                                        </img>
                                    </Link>
                                </div>
                            </div>

                            <div className="post-container">
                                <div className="mini-side-bar">
                                    <Link className="mini-add-service" to="/addpost">post something</Link>
                                    <Link className="contact" to="/contact">contact</Link>
                                </div>
                                
                                <PostItems
                                    posts={this.state.posts}
                                    postComments={this.state.postComments}
                                    handleGetAllPosts={this.props.handleGetAllPosts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
