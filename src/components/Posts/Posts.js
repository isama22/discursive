import React from 'react'
import './Posts.css'

function Posts({ post }) {

    return (
        <>

            
                <div className="post">
                <div className="post-header"><p>{post.title}</p></div>
                <p>{post.description}</p>
                </div>
         

        </>
    )
}

export default Posts