import React, { Component } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import projectData from "../data/projectData"

import Project from "../components/Project"

import "../css/pages/projectPage.css"

class ProjectPage extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            width: window.innerWidth,
        }
    }

    updateMousePosition = (ev) => {
        this.setState({ x: (ev.clientX / window.innerWidth) * 2 - 1, y: - (ev.clientY / window.innerHeight) * 2 + 1 })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 1060;
        const { x, y } = this.state;
        const styles = {
            transform: `translate(${x * 20}px, ${y * 20}px)`
        };
        const stylesBackground = {
            transform: `translate(${x * 8}px, ${y * 8}px)`
        };


        if (isMobile) {
            return (
                <div id="project" className="ProjectPage">
                    <ParallaxProvider >
                        <Parallax className="ProjectPage__background">
                            <h1 style={stylesBackground}>PROJECTS</h1>
                        </Parallax>
                    </ParallaxProvider>
                    <div className="ProjectPage__content">
                        <div className="ProjectPage__title">
                            <h1>Projects</h1>
                        </div>
                        <div className="ProjectPage__projects">
                            {projectData.map((item, id) => (
                                <Project data={item} id={id} />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div id="project" className="ProjectPage" onMouseMove={this.updateMousePosition.bind(this)}>
                <ParallaxProvider >
                    <Parallax className="ProjectPage__background">
                        <h1 style={stylesBackground}>PROJECTS</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="ProjectPage__content" style={styles}>
                    <div className="ProjectPage__title">
                        <h1>Projects</h1>
                    </div>
                    <div className="ProjectPage__projects">
                        {projectData.map((item, id) => (
                            <Project data={item} id={id} />
                        ))}
                    </div>
                </div>
            </div>)
        }

    }

}

export default ProjectPage