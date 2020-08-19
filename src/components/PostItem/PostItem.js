import React from 'react'
import { Link } from 'react-router-dom'
import './PostItem.css'
import moment from 'moment'

function PostItem({ post }) {
    const dateCreated = new Date(post.createdAt)
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
                        <p>{moment(dateCreated.toLocaleString()).format('LL')}</p>
                    </div>
                    <p className="post-body">{post.description}</p>
                </div>
            </Link>
        </>
    )
}

export default PostItem