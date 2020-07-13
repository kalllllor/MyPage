import React, { Component } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


import "../css/pages/projectPage.css"

import "../css/pages/aboutPage.css"

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
            <div className="AboutPage" onMouseMove={this.updateMousePosition.bind(this)}>
                <ParallaxProvider >
                    <Parallax className="AboutPage__background" y={[-10, 50]}>
                        <h1 style={stylesBackground}>ABOUT</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="AboutPage__content">

                    <div className="ProjectPage__title">
                        <h1>About Me</h1>
                    </div>
                </div>

            </div>
        )
    }

}

export default AboutPage