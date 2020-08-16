import React from 'react'
import { Link } from 'react-router-dom'
import './PostItem.css'

function PostItem({ post }) {
    return (
        <>
            <Link
                to={{
                    pathname: '/postdetail',
                    state: { post }
                }}
            >
                <div className="post">
                    <div className="post-header">
                        <p>{post.title}</p>
                        <p>{post.creator}</p>

                    </div>
                    <p className="post-body">{post.description}</p>
                </div>

            </Link>
        </>
    )
}

export default PostItem