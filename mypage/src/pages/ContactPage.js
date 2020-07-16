import React, { Component } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


import "../css/pages/contactPage.css"
import "../css/pages/projectPage.css"


class ContactPage extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            buttonText: "Send"
        }
    }

    updateMousePosition = (ev) => {
        this.setState({ x: (ev.clientX / window.innerWidth) * 2 - 1, y: - (ev.clientY / window.innerHeight) * 2 + 1 })
    }

    render() {
        const { x, y } = this.state;
        const styles = {
            transform: `translate(${x * 20}px, ${y * 20}px)`
        };
        const stylesBackground = {
            transform: `translate(${x * 8}px, ${y * 8}px)`
        };
        return (
            <div id="contact" className="ContactPage" onMouseMove={this.updateMousePosition.bind(this)}>
                <ParallaxProvider >
                    <Parallax className="ContactPage__background" y={[-10, 50]}>
                        <h1 style={stylesBackground}>CONTACT</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="ContactPage__content">
                    <div className="ProjectPage__title">
                        <h1>Contact</h1>
                    </div>
                    <div className="ContactPage__contacts">
                        <div className="ContactPage__form">
                            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                                <div className="input__animation">
                                    <textarea onChange={e => this.setState({ message: e.target.value })} name="message" className="input message-input" type="text" value={this.state.message} required />
                                    <span class="bar"></span>
                                    <label>Your Message</label>
                                </div>
                                <div className="input__animation">
                                    <input required onChange={e => this.setState({ name: e.target.value })} name="name" className="input message-name" type="text" value={this.state.name} />
                                    <span class="bar"></span>
                                    <label>Your Name</label>
                                </div>
                                <div className="input__animation">
                                    <input required onChange={(e) => this.setState({ email: e.target.value })} name="email" className="input message-email" type="text" required value={this.state.email} />
                                    <span class="bar"></span>
                                    <label>Your Email</label>
                                </div>
                                <div className="contact__button">
                                    <button type="submit" className="button sent__button">{this.state.buttonText}</button>
                                </div>
                            </form>
                        </div>
                        <div className="ContactPage__socials">
                            <div className="socials">
                                <h4>TEL</h4>
                                <p>883 230 811</p>
                            </div>
                            <div className="socials">
                                <h4>MAIL</h4>
                                <p>karolgren3@gmail.com</p>
                            </div>
                            <div className="socials">
                                <h4>GITHUB</h4>
                                <p>github.com/kalllllor</p>
                            </div>
                            <div className="socials">
                                <h4>CV</h4>
                                <a href="">DOWNLOAD</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default ContactPage