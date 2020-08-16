import React, { Component } from 'react'
// import './ServiceFloorItems.css'
import PostItem from '../../components/PostItem/PostItem'

class PostItems extends Component {

    render() {
        return (
            <>
              <div className="posts">
                  {this.props.posts.map(post =>
                    <PostItem 
                      post={post} 
                      key={post._id}
                    />
                  )}
              </div> 
            </>
        )
    }
}

export default PostItems