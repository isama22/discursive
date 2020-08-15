import React from 'react'
import './Comments.css'

function Comments({ post }) {

    return (
        <>
    
            {/* <div className="post-detail">
                <div className="post-header"><p>{post.title}</p></div>
                <p className="post-body">{post.description}</p>
            </div> */}
            <div>
                <p>comments:</p>
                <input type="text"/>
            </div>

        </>
    )
}

export default Comments