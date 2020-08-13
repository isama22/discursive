import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

class Home extends Component {

    render() {
   

        return (
            <>
                <div className="macintosh">
                    <br />

                    <div className="Home">
                        <div className="image">
                            <div className="nav">
                                <NavBar 
                                user={this.props.state.user} 
                                handleLogout={this.props.handleLogout} 
                                handleSignupOrLogin={this.props.handleSignupOrLogin}
                                /></div>
                            <div className="main-container">

                                <div className="side-bar">

                                    <div className="info">
                                        <Link to="/"><img className="title-photo" src="https://i.postimg.cc/3xjzy6Pd/Screen-Shot-2020-06-18-at-7-17-56-PM.png" alt=""></img></Link>

                                    </div>
                                    <div className="info-body">
                                        <Link className="add-service" to="/addpost">make a new post</Link>
                                        <br/>
                                        <Link className="add-service" to="/addpost">search by tag</Link>




                                    </div>
                                </div>

                                <div className="post-container">
                                    <div className="post">
                                        <div className="post-header"><p>research</p></div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        </div>
                                    <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        </div>
                                    
                            
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
