import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './PostCard.css'
// import moment from 'moment'

function PostCard({ post, handleDeletePost, user }) {
    user = user === null ? user = NaN : user

    return (
        <>

            <p>{post.title}</p>
            <p>{post.creator}</p>

            <p>{post.description}</p>

        </>
    )
}

export default PostCard