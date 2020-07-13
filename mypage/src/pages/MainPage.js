import React from "react";
import Clock from 'react-live-clock';
import { motion } from "framer-motion";

import Background from "./Background"
import Menu from "../components/Menu"
import Socials from "../components/Socials"
import Logo from "../components/Logo"

import "../css/pages/mainPage.css"


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

const date = new Date().getDay();

function MainPage() {
    return (
        <div className="MainPage">
            <div className="MainPage__background" />
            <Menu />
            <Background />
            <div className="MainPage__content">
                <div className="MainPage__text">
                    <motion.div className="logo__container"
                        variants={container}
                        initial="hidden"
                        animate="visible">
                        <motion.div variants={config}>
                            <h1>Dzień dobry,</h1>
                        </motion.div>
                        <motion.h1 variants={config}>
                            <h1>Nazywam sie Karol Greń</h1>
                        </motion.h1>
                        <motion.div variants={config} className="text__colored">
                            <h3>aspiruję na stanowisko stażysty <h3 style={{ color: "rgb(35, 41, 148)" }}> frontend </h3>developera</h3>
                        </motion.div>
                    </motion.div>
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
                <div className="MainPage__logo">
                    <Logo />
                </div>
            </div>

        </div>
    );
}


export default MainPage;
