import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

class Home extends Component {
    render() {
        return (
            <>
                <div className="Home">
                    <div className="image">
                    <div className="main-container">

                        <div className="side-bar">   
                        <div className="nav"><NavBar /></div>
                            
                            <div className="info">
                                <Link to="/"><img className="title-photo" src="https://i.postimg.cc/3xjzy6Pd/Screen-Shot-2020-06-18-at-7-17-56-PM.png" alt=""></img></Link>
                                
                            </div>
                            <div className="info-body">
                                <p className="descriptions">source material</p>
                                {/* <p className="descriptions">music</p>
                                <p className="descriptions">ideas</p>
                                <p className="descriptions">resouces</p>
                                <p className="descriptions">poetry</p> */}

                            </div>  
                        </div>
                        
                        <div className="post-container">
                        <div className="post">
                            <div className="post-header"><p>doing my homework today</p></div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        </div>
                        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem</div>
                        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem</div>
                        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem</div>
                        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem</div>
                        <div className="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus provident atque fugiat maiores reprehenderit dicta inventore vitae, repudiandae labore facere, aspernatur ut! Enim obcaecati quia numquam debitis quae veniam? lorem
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
