import React from 'react'
import './PostDetail.css'
// import { Link, Route } from 'react-router-dom';
// import PostDetail from '../../components/PostDetail/PostDetail'

function PostDetail({ post }) {

    return (
        <>
    
            <div className="post-detail">
                <div className="post-header"><p>{post.title}</p></div>
                <p className="post-body">{post.description}</p>
            </div>

        </>
    )
}

export default PostDetail