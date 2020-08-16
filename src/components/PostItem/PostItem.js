import React, { Component } from 'react'
import './PostItem.css'
// import { Link, Route } from 'react-router-dom';
import Comments from '../../components/Comments/Comments'

class PostItem extends Component {

    state = {
        postVisible: true,
        detailsVisible: false

    }

    render() {

        return (
            <>
                {this.props.posts.map((post, id) =>
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
                                        <p>{post.creator}</p>
                                        <div className="details-btn" >
                                            <p
                                                onClick={() => {
                                                    this.setState({ postVisible: false, detailsVisible: true })
                                                }} key={id}>details
                                            </p>
                                        </div>
                                    </div>
                                    <p className="post-body">{post.description}</p>
                                </div>
                                {/* </a> */}
                            </>
                            :
                            <div className="details-div">

                                <div className="post-detail">
                                    <div className="post-header">
                                        <p>{post.title}</p>
                                        <div className="hide-btn">
                                            <p
                                                onClick={() => {
                                                    this.setState({ postVisible: true, detailsVisible: false })
                                                }} key={id}>
                                                hide
                                        </p>
                                        </div>
                                    </div>
                                    <p className="post-body-details">{post.description}</p>
                                  
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