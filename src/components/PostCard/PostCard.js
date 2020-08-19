import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './PostCard.css'
// import moment from 'moment'

function PostCard({ post, handleDeletePost, user }) {
    user = user === null ? user = NaN : user

    return (
        <>
            <div className='card-links'>
                <Link to="/" className="action-link">back</Link>
                {user._id === post.user &&
                    <button
                        className='delete'
                        onClick={() => handleDeletePost(post._id)}
                    >
                        remove
                            </button>
                }
                {user._id === post.user &&
                    <Link
                        className='action-link'
                        to={{
                            pathname: '/edit',
                            state: { post },
                        }}>edit
                            </Link>
                }
            </div>


            <div className="detail-container">
                <div className="post-header">
                    <p>{post.title}</p>
                    <p>{post.creator}</p>
                </div>
                <div className="post-description">
                    <p>{post.description}</p>
                </div>
            </div>
        </>
    )
}

export default PostCard