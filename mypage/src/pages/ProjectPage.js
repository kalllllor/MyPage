import React, { Component } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import Project from "../components/Project"

import "../css/pages/projectPage.css"

class ProjectPage extends Component {
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
            transform: `translate(${x * 15}px, ${y * 15}px)`
        };
        return (
            <div className="ProjectPage" onMouseMove={this.updateMousePosition.bind(this)} style={styles}>
                <ParallaxProvider>
                    <Parallax className="ProjectPage__background" y={[-100, 10]}>
                        <h1>PROJECTS</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="ProjectPage__content">
                    <div className="ProjectPage__title">
                        <h1>Projects</h1>
                    </div>
                    <div className="ProjectPage__projects">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectPage