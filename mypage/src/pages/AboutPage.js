import React, { Component } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import "../css/pages/projectPage.css"
import "../css/pages/aboutPage.css"

import photo from "../assets/blancior.jpg"

class AboutPage extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
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
            <div id="about" className="AboutPage" onMouseMove={this.updateMousePosition.bind(this)}>
                <ParallaxProvider >
                    <Parallax className="AboutPage__background" y={[-10, 50]}>
                        <h1 style={stylesBackground}>ABOUT</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="AboutPage__content">
                    <div className="ProjectPage__title">
                        <h1>About Me</h1>
                    </div>
                    <div className="content__container">
                        <div className="about__desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed luctus dolor. Cras sollicitudin imperdiet enim posuere rhoncus. Cras sit amet urna pharetra, placerat nunc ac, elementum augue. Curabitur nec tempus ligula. Phasellus dictum est in dictum porta. Maecenas imperdiet et lectus eget faucibus. Donec molestie consequat euismod. Donec tempus facilisis eros, sed auctor diam porttitor quis. Phasellus maximus enim a sodales ultrices. Nulla quis aliquet orci. Donec elementum a nisl eget elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus maximus augue, in gravida nisi congue at. Fusce lacinia libero vel dolor tempor, a sollicitudin ligula rhoncus.</p>
                        </div>
                        <div className="about__image">
                            <img src={photo} alt="me" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default AboutPage