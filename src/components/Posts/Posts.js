import React from 'react'
import './Posts.css'
import { Link, Route } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail'

function Posts({ post }) {
    return (
        <>
        
            <div className="post">
                <div className="post-header"><p>{post.title}</p></div>
                <p className="post-body">{post.description}</p>
               
            </div>
           
        </>
    )
}

export default Posts