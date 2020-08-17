import React, { Component } from 'react'
// import moment from 'moment'

class PostComment extends Component {

    render() {

        // const dateCreated = new Date(this.props.postComment.createdAt)

        return (
            <div key={this.props.postComment._id} className='s-comment-container'>
                <div className='group'>
                    <div className='comment-info'> 
                        <p className='comment-creator'>{this.props.postComment.creator}</p>
                    </div>
                    <div className='comment-text mobile-erase'>
                        <p>{this.props.postComment.text}</p>
                    </div>
                    {this.props.user._id === this.props.post.user || this.props.user._id === this.props.postComment.user ?
                        <>
                            {/* <p className='my-comment-date'>{moment(dateCreated.toLocaleString()).format('LL')}</p> */}
                            <button 
                                className='x-btn' 
                                id={this.props.post._id} 
                                name={this.props.postComment._id} 
                                onClick={this.props.handleDeletePostComment}
                            > X
                            </button>
                        </>
                    :
                    <p className='comment-date'>
                        {/* {moment(dateCreated.toLocaleString()).format('LL')} */}
                    </p>
                    }
                </div>
            </div>
        )
    }
}

export default PostComment