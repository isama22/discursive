import React, { Component } from 'react'
import './PostItem.css'
import Posts from '../../components/Posts/Posts'
import { Link, Route } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail'

class PostItem extends Component {

    state = {
        postVisible: true,
        visible: false
    }

    render() {
        return (
            <>
                {this.props.posts.map(post =>
                    <>
                        {this.state.postVisible ?
       
                        <>
                            <a className="details-onClick" onClick={() => { this.setState({ postVisible: false, visible: true }) }}>
                            <Posts
                                post={post}
                                key={post._id}
                            />
                                {/* show details */}
                            </a>
                        </>
                            :
                            <div className="details-div">
                         
                                <PostDetail  post={post}
                                key={post._id}/>
                                <button onClick={() => { this.setState({ postVisible: true, visible: false }) }}>
                                    hide details
                                </button>
                            </div>

                            
                        }
                    </>
                )}
            </>
        )
    }
}

export default PostItem