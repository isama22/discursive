import React from 'react'
import { Link } from 'react-router-dom'
import './PostItem.css'
import PostCard from '../../components/PostCard/PostCard'

function PostItem({ post }) {
    return (
        <>
            <Link
            className="detail-link"
                to={{
                    pathname: '/detailpage',
                    state: { post }
                }}>
                <div className="post">
                    <div className="post-header">
                        <p>{post.title}</p>
                        <p>{post.creator}</p>
                    </div>
                    <p className="post-body">{post.description}</p>
                </div>
                {/* <PostCard 
                className="service-card"
                key={this.state.post._id}
                post={this.state.post}
                user={this.props.user}
                 handleDeletePost={this.props.handleDeletePost}
                 /> */}
            </Link>
        </>
    )
}

export default PostItem