import * as React from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import "../css/components/project.css"


function Project() {

    return (
        <div className="Project">
            <div className="Project__background">
            </div>
            <ParallaxProvider >
                <Parallax className="Project__title" y={[-50, 30]}>
                    <h1>Projekt 1</h1>
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}

export default Project