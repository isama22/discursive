import React, { Component } from 'react'
import './PostItem.css'
import Posts from '../../components/Posts/Posts'

class PostItem extends Component {

    render() {
        return (
            <>
              <div className="">
                  
                  {this.props.posts ? this.props.posts.map(post =>
                    <Posts
                      post={post} 
                      key={post._id}
                    />
                    
                    
                  ): <p>no posts yet</p>}
              </div> 
            </>
        )
    }
}

export default PostItem