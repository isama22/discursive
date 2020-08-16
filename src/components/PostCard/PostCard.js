import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './PostCard.css'
// import moment from 'moment'

function PostCard({ post, handleDeletePost, user }) {
    user = user === null ? user = NaN : user

    return (
        <>
            <div className="post-detail">
                <div className="post-header">
                    <p>{post.title}</p>
                    <p>{post.creator}</p>
                </div>
                <div>
                    <p>{post.description}</p>
                </div>
            </div>




        </>
    )
}

export default PostCard