import * as React from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import "../css/components/project.css"

import gitIcon from "../assets/socials/github.png"
import pageIcon from "../assets/socials/page.png"

function Project(props) {
    return (
        <div className="Project">
            <div className={props.id % 2 === 0 ? "Project__background2" : "Project__background"}>
                <div className="Project__content">
                    <div className="content__title">
                        <h2>{props.data.title}</h2>
                    </div>
                    <div className="content__desc">
                        <p>{props.data.desc}</p>
                    </div>
                    <ul className="content__icons">
                        <li className="content__icon">
                            <a target="_blank" rel="noopener noreferrer" href={props.data.gitLink}>
                                <img src={gitIcon} alt="github" />
                            </a>
                        </li>
                        <li className="content__icon">
                            <a target="_blank" rel="noopener noreferrer" href={props.data.pageLink}>
                                <img src={pageIcon} alt="page" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ParallaxProvider >
                <Parallax className={props.id % 2 === 0 ? "Project__title2" : "Project__title"} y={[-50, 30]}>
                    <h1>{props.data.id}</h1>
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}

export default Project