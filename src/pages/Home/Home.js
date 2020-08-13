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
                                        <hr className="hr"/>
                                        <Link className="add-service" to="/addpost">make a new post</Link>
                                        <br/><hr/>
                                        <Link className="add-service" to="/addpost">search by tag</Link>
                                        <hr/>



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
