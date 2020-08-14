import React, { Component } from 'react'
import './PostItem.css'
import Posts from '../../components/Posts/Posts'

class PostItem extends Component {

    render() {
        return (
            <>
              <div className="post-component">
                  {this.props.posts.map(post =>
                    <Posts
                      post={post} 
                      key={post._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default PostItem