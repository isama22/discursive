import React from 'react'
import './Posts.css'

function Posts({ post }) {

    return (
        <>
        <div className='serviceflooritem'>
            <p className='name'>ppp</p>
            <p className='post-component'>{post.title}</p>
            <p className='post-component'>{post.description}</p>
        </div>
        </>
    )
}

export default Posts