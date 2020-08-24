import React, { Component } from 'react'
import moment from 'moment'
import './PostComment.css'

class PostComment extends Component {

    render() {
        const dateCreated = new Date(this.props.postComment.createdAt)

        return (
            <div key={this.props.postComment._id} className=''>
                <div className='comment-group'>
                    <div className='comment-creator-div'>
                        <p className='comment-creator'>{this.props.postComment.creator}</p>
                        <p className='my-comment-date'>{moment(dateCreated.toLocaleString()).format('MM.DD.YYYY')}</p>
                    </div>
                    <div className='comment-text'>
                        <p>{this.props.postComment.text}</p>
                    </div>
                    {this.props.user._id === this.props.post.user || this.props.user._id === this.props.postComment.user ?
                        <>
                            <div className="comment-x-btn-div">

                            <button
                                className='comment-x-btn'
                                id={this.props.post._id}
                                name={this.props.postComment._id}
                                onClick={this.props.handleDeletePostComment}
                            > X
                            </button>
                            </div>
                        </>
                         :
                        <p></p>
                    } 
                </div>
            </div>
        )
    }
}

export default PostComment