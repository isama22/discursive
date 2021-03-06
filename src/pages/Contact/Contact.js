import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import NavBar from '../../components/NavBar/NavBar'
import { SocialIcon } from 'react-social-icons'


class Contact extends Component {

    render() {
        return (
            <>
                <div className="Home">
                    <div className="image">
                        <div className="nav">
                            <NavBar
                                user={this.props.user}
                                handleLogout={this.props.handleLogout}
                                handleSignupOrLogin={this.props.handleSignupOrLogin}
                            />
                        </div>
                        <div className="main-container">
                            <div className="side-bar">
                                <div className="info">
                                    <Link to="/"><img className="title-photo"
                                        src="https://i.postimg.cc/9XBw0fy3/Screen-Shot-2020-05-27-at-12-41-22-AM.png" alt=""></img></Link>
                                </div>

                                <div className="contact-add-service">
                                    <p>use this site to compile and share your source materials!</p>
                                    <p>you can find me and my other work through the links to the right</p>
                                </div>
                                <Link to="/">
                                    <img
                                        className="contact-title-photo"
                                        src="https://thumbs.gfycat.com/KaleidoscopicAdeptCoyote-max-1mb.gif"
                                        alt="">
                                    </img>
                                </Link>
                            </div>


                            <div className="me">
                            <div className="contact-mini-side-bar">
                                <Link className="mini-add-service" to="/addpost">post something</Link>
                                <Link className="contact" to="/">back</Link>
                            </div>
                                <div>
                                    <p className="email">isasofma@gmail.com</p>
                                </div>
                                <div className='icons'>
                                    <SocialIcon
                                        style={{ height: 35, width: 35, margin: 10 }}   
                                        bgColor="bisque"
                                        fgColor='black'
                                        url="https://www.linkedin.com/in/isa-sofia-martinez/"
                                    />
                                    <SocialIcon
                                        style={{ height: 35, width: 35, margin: 10 }}
                                        bgColor="bisque"
                                        fgColor='black'
                                        url="http://isasofiamartinez.com/"
                                    />
                                    <SocialIcon
                                        style={{ height: 35, width: 35, margin: 10 }}
                                        bgColor="bisque"
                                        fgColor='black'
                                        url="https://github.com/isama22"
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

export default Contact;
