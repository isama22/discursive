import React, { Component } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import Comments from '../../components/Comments/Comments'
import './PostDetail.css'

class PostDetail extends Component {

    state = {
        post: this.props.location.state.post,
    }

    render() {

        return (
            <>
                <div className='post-detail'>
                    <PostCard
                        className="service-card"
                        key={this.state.post._id}
                        post={this.state.post}
                        user={this.props.user}
                    />
                </div>
                <div className='break-container'>
                    <div className="break"></div>
                </div>
                <div className='title-container'>
                    <p className="comment-title">Comments ::</p>          
                </div>
                <Comments />


            </>
        )
    }
}

export default PostDetail