import React from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import Typist from 'react-typist';

import Background from "../Background"
import Socials from "../../components/Socials"
import Footer from "../../components/Footer"

import "../../css/pages/mainPage.css"
import "../../css/pages/projectPage.css"
import "../../css/pages/mobilePage.css"
import ProjectPage from "../ProjectPage";
import ContactPage from "../ContactPage"

import me from "../../assets/me.jpg"

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
            <div className="MobilePage__about">
                <ParallaxProvider >
                    <Parallax className="MobilePage__background">
                        <h1>ABOUT</h1>
                    </Parallax>
                </ParallaxProvider>
                <div className="ProjectPage__title">
                    <h1>About</h1>
                </div>
                <img src={me} alt="me" />
                <p>My name is Karol. Im a novice frontend developer, I have started learning HTML and CSS about half a year ago. After I made a Marcel Badetko Page I
                decided to start learning React. In React I made already couple of projects as FoodLoose and PAULA.</p>
            </div>
            <ContactPage />
            <Footer />
        </div>
    );
}


export default MainPage;
