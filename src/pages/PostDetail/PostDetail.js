import React, { Component } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import Comments from '../../components/Comments/Comments'
import './PostDetail.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

class PostDetail extends Component {

    state = {
        post: this.props.location.state.post,
    }

    render() {

        return (
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
                                    <Link to="/"><img className="title-photo"
                                        src="https://i.postimg.cc/9XBw0fy3/Screen-Shot-2020-05-27-at-12-41-22-AM.png" alt=""></img></Link>
                                </div>
                                <div className="info-body">
                                    <div className="add-service" >
                                        <Link className="add-service" to="/addpost">post something</Link>
                                    </div>
                                    <Link to="/contact">
                                        <img className="second-photo"
                                            src="https://media0.giphy.com/media/g1wdxEZmNhsY/giphy.gif?cid=ecf05e47h2cu2t7y66jsc7xyq7x4z20q39ndi2mexlm7hkn4&rid=giphy.gif" alt="">
                                        </img>
                                    </Link>
                                </div>
                            </div>
                            <div className="post-card-container">
                                <Link to="/">back</Link>
                                <PostCard
                                    className="service-card"
                                    key={this.state.post._id}
                                    post={this.state.post}
                                    user={this.props.user}
                                    handleDeletePost={this.props.handleDeletePost}
                                />
                                <div className='break-container'>
                                    <div className="break"></div>
                                </div>
                                <Comments
                                    key={this.state.post._id}
                                    post={this.state.post}
                                    user={this.props.user}
                                    handleChange={this.props.handleChange}
                                    postComment={this.props.postComment}
                                    handleAddPostComment={this.props.handleAddPostComment}
                                    handleDeletePostComment={this.props.handleDeletePostComment}
                                    handleGetAllPosts={this.props.handleGetAllPosts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetail