import React, {Component}  from 'react'
import './Comments.css'
import PostComment from '../../components/PostComment/PostComment'
import * as postsAPI from '../../services/posts-api'


class Comments extends Component {
    state = {
        postComment: '',
        post: this.props.post
    }

    handleAddPostComment = async (e) => {
        e.preventDefault()
        await postsAPI.addComment(e.target.id, this.state.postComment)
        const post = await postsAPI.getOne(this.state.post)
        this.setState({post: post, postComment: ''})
    }

    handleDeletePostComment = async(e) => {
        e.preventDefault()
        await postsAPI.deleteComment(e.target.id, e.target.name)
        const post = await postsAPI.getOne(this.state.post)
        this.setState({post: post, postComment: ''})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async componentDidMount(){
        const post = await postsAPI.getOne(this.state.post)
        this.setState({post: post, postComment: ''})
    }


render(){
    return (
        <>
            <div className='all-comments-container'>
                <hr></hr>
                <div className='comments'>
                    {this.state.post && this.state.post.postComments.map(postComment =>
                        <PostComment
                            postComment={postComment}
                            key={postComment._id}
                            user={this.props.user}
                            post={this.state.post}
                            handleDeletePostComment={this.handleDeletePostComment}
                        />
                    )}
                    <div className='form-container'>
                        <form
                            className='comment-form'
                            id={this.props.post._id} 
                            onSubmit={this.handleAddPostComment}
                        >
                            <textarea
                                onChange={this.handleChange}
                                name='postComment'
                                value={this.state.postComment}
                                className='comment-input'
                                autoComplete='off'
                                placeholder="add a comment"
                            />
                            <button
                                className="add-btn"
                                type="submit"
                            >
                                ➳
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
}

export default Comments