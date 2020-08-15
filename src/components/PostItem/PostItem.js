import React, { Component } from 'react'
import './PostItem.css'
import Posts from '../../components/Posts/Posts'
import { Link, Route } from 'react-router-dom';
import Comments from '../../components/Comments/Comments'

class PostItem extends Component {

    state = {
        postVisible: true,
        visible: false
    }

    render() {

        return (
            <>
                {this.props.posts.map(post =>
                    <>
                        {this.state.postVisible ?
                            <>
                                {/* <a
                                    className="details-onClick"
                                    onClick={() => {
                                        this.setState({ postVisible: false, visible: true })
                                    }}> */}
                                {/* <Posts
                                        post={post}
                                        key={post._id}
                                    /> */}
                                <div className="post">
                                    <div className="post-header">
                                        <p>{post.title}</p>
                                        <div className="details-btn" >
                                        <p 
                                            onClick={() => {
                                            this.setState({ postVisible: false, visible: true })
                                        }}>show details
                                        </p>
                                        </div>
                                    </div>
                                    <p className="post-body">{post.description}</p>
                                </div>
                                {/* </a> */}
                            </>
                            :
                            <div className="details-div">

                                {/* <PostDetail
                                    post={post}
                                    key={post._id}
                                /> */}

                                <div className="post-detail">
                                    <div className="post-header">
                                        <p>{post.title}</p>
                                        <div className="hide-btn">
                                            <p
                                                onClick={() => {
                                                    this.setState({ postVisible: true, visible: false })
                                                }}>
                                                hide details
                                        </p>
                                        </div>
                                    </div>
                                    <p className="post-body">{post.description}</p>
                                </div>
                                    <Comments />
                            </div>
                        }
                    </>
                )}
            </>
        )
    }
}

export default PostItem