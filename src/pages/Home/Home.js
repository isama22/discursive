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
                <div className="macintosh">
                    <br />

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
                                        {/* <Link to="/"><img className="title-photo" src="https://i.postimg.cc/3wG4KKLY/Screen-Shot-2020-08-11-at-2-20-47-AM.png" alt=""></img></Link> */}
                                        <Link to="/"><img className="title-photo"
                                            src="https://i.postimg.cc/9XBw0fy3/Screen-Shot-2020-05-27-at-12-41-22-AM.png" alt=""></img></Link>

                                    </div>
                                    <div className="info-body">
                                        <div className="add-service" >
                                            <Link className="add-service" to="/addpost">post something</Link>
                                        </div>

                                        {/* <div className="add-service" >
                                            <Link className="add-service" to="/addpost">search by tag</Link>
                                        </div> */}


                                        <Link to="/contact">
                                            <img className="second-photo"
                                                src="https://64.media.tumblr.com/ceeb7f2600bb9881b2bf4ad7f7bf95cd/tumblr_p4w3prWhoe1viuar9o1_1280.gifv" alt="">
                                            </img>
                                        </Link>
                                        {/* <div className="add-service">
                                            <Link className="add-service" to="/contact">contact</Link>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="post-container">


                                    <PostItems
                                        posts={this.state.posts}


                                        postComments={this.state.postComments}
                                        handleGetAllPosts={this.props.handleGetAllPosts}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
