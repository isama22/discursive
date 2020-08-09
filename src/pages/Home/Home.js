import React, { Component } from 'react';
import './Home.css';
// import {Route} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <div className="Home">
                    <div className="image">
                    <div className="main-container">

                        <div className="side-bar">   
                            <div className="info">
                                <p>hello</p>
                            </div>
                            <div className="info-body">
                                <p className="descriptions">content</p>
                            </div>
                        </div>
                        
                        <div className="post-container">
                        <div className="posts"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
