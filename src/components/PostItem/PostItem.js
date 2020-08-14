import React, { Component } from 'react'
import './PostItem.css'
import Posts from '../../components/Posts/Posts'
import { Link, Route } from 'react-router-dom';

class PostItem extends Component {
    state = {
        postVisible: true,
        visible: false
    }

    render() {
        return (
            // <>
            <div >

                {this.props.posts.map(post =>
                    <>
                        {/* <Posts
                            post={post}
                            key={post._id}
                      
                        /> */}

                        {/* <div className="post">
                            <div className="post-header">
                                <p>{post.title}</p>
                                <button onClick={() => { this.setState({ visible: true }) }}>
                                    show details
                              </button>
                            </div>
                            <p className="post-body">{post.description}</p>
                        </div> */}

                        {this.state.postVisible ?
                            <div className="post">
                                <div className="post-header">
                                    <p>{post.title}</p>
                                    <button onClick={() => { this.setState({ postVisible: false, visible: true }) }}>
                                        show details
                                    </button>
                                </div>
                                <p className="post-body">{post.description}</p>
                            </div>

                            :
                            <div className="details-div">
                                details info
                                <button onClick={() => { this.setState({ postVisible: true, visible: false }) }}>
                                    hide details
                                </button>
                            </div>

                            
                        }
                    </>
                )}
            </div>

            // </>
        )
    }
}

export default PostItem