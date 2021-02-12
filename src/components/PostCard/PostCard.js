import React from 'react'
import { Link } from 'react-router-dom'
import '../../utils/userService'
import './PostCard.css'
import moment from 'moment'

function PostCard({ post, handleDeletePost, user }) {
    user = user === null ? user = NaN : user
    const dateCreated = new Date(post.createdAt)
    return (
        <>
            <div className="detail-container">
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
                <div className="card-post-header">
                    <div className="author">
                        {/* <p className="card-post-creator">{post.creator}</p> */}
                        <Link to="/profile" className="card-post-creator">{post.creator}</Link>
                    </div>
                    <div className="detail-title">
                        <p className="card-post-title">{post.title}</p>
                        
                    </div>
                    <div className="time">
                        <p>{moment(dateCreated.toLocaleString()).format('MM.DD.YYYY')}</p>
                    </div>
                </div>
                <div className="post-description">
                    <p>{post.description}</p>
                <p>{user.posts.length}</p>
                </div>
            </div>
        </>
    )
}

export default PostCard