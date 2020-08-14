import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import PostItem from '../../components/PostItem/PostItem'
import * as postsAPI from '../../services/posts-api'

class Home extends Component {
    state = {
        posts: []
    }
    async componentDidMount() {
        const posts = await postsAPI.getAll()
        this.setState({posts})
      }
    render() {
   

        return (
            <>
                <div className="macintosh">
                    <br />

                    <div className="Home">
                        <div className="image">
                            <div className="nav">
                                <NavBar 
                                user={this.props.user} 
                                handleLogout={this.props.handleLogout} 
                                handleSignupOrLogin={this.props.handleSignupOrLogin}
                                /></div>
                            <div className="main-container">

                                <div className="side-bar">

                                    <div className="info">
                                        <Link to="/"><img className="title-photo" src="https://i.postimg.cc/3wG4KKLY/Screen-Shot-2020-08-11-at-2-20-47-AM.png" alt=""></img></Link>

                                    </div>
                                    <div className="info-body">
                                        <div className="add-service" >
                                           <Link className="add-service" to="/addpost">post something</Link> 
                                        </div>
                                        
                                        <div className="add-service" >
                                            <Link className="add-service" to="/addpost">search by tag</Link>
                                            </div>
                                        
                                       



                                    </div>
                                </div>

                                <div className="post-container">
                   
               
                                <PostItem 
                                posts={this.state.posts}
                                />
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
