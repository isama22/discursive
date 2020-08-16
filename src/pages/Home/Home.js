import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import PostItems from '../../components/PostItems/PostItems'
import * as postsAPI from '../../services/posts-api'

class Home extends Component {
    state = {
        posts: []
    }
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
                                                src="https://media0.giphy.com/media/g1wdxEZmNhsY/giphy.gif?cid=ecf05e47h2cu2t7y66jsc7xyq7x4z20q39ndi2mexlm7hkn4&rid=giphy.gif" alt="">
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
