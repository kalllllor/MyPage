import React from "react";
import { motion } from "framer-motion";
import Typist from 'react-typist';
import Background from "../Background"
import Socials from "../../components/Socials"
import "../ProjectPage"

import "../../css/pages/mainPage.css"
import "../../css/pages/projectPage.css"
import ProjectPage from "../ProjectPage";
import ContactPage from "../ContactPage"
const config = {
    hidden: { y: -30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
        }
    }
};

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.7,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

function MainPage() {
    return (
        <div className="MobilePage">
            <div className="MainPage">
                <div className="MainPage__background" />
                <Background />
                <div className="MainPage__content">
                    <div className="MainPage__text">
                        <Typist stdTypingDelay="200">
                            <span>Hi,</span>
                            <br />
                            <span>My name is Karol Greń</span>
                            <br />
                            <span>and Im a novice <span style={{ color: "rgb(35, 41, 148)" }}>frontend</span> developer</span>
                        </Typist>
                    </div>
                    <div className="MainPage__socials">
                        <motion.div className="logo__container"
                            variants={container}
                            initial="hidden"
                            animate="visible">
                            <h3>Media</h3>
                        </motion.div>
                        <Socials />
                    </div>
                </div>
            </div>
            <ProjectPage />
            <ContactPage />
        </div>
    );
}


export default MainPage;
