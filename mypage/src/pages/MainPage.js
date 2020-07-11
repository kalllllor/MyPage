import React from "react";
import Clock from 'react-live-clock';
import { motion } from "framer-motion";

import Background from "./Background"
import Menu from "../components/Menu"
import Socials from "../components/Socials"
import Logo from "../components/Logo"

import "../css/pages/mainPage.css"


const config = {
    hidden: { y: 20, opacity: 0 },
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

const week = ["poniedziałek", "wtorek", "sroda", "czwartek", "piątek", "sobota", "niedziela"]

function MainPage() {
    return (
        <div className="MainPage">
            <div className="MainPage__background" />
            <Menu />
            <Background />
            <div className="MainPage__time">
                <motion.div className="logo__container"
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    <h4><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></h4><h4>{week[date - 1]}</h4>
                </motion.div>
            </div>
            <div className="MainPage__text">
                <motion.div className="logo__container"
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    <motion.div variants={config}>
                        <h1>Dzien dobry,</h1>
                    </motion.div>
                    <motion.h1 variants={config}>
                        <h1>Nazywam sie Karol Gren</h1>
                    </motion.h1>
                    <motion.div variants={config}>
                        <h3>aspiruję na stanowisko stażysty frontend developera</h3>
                    </motion.div>
                </motion.div>
            </div>
            <div className="MainPage__socials">
                <h3>Media</h3>
                <Socials />
            </div>
            <div className="MainPage__logo">
                <Logo />
            </div>
        </div>
    );
}


export default MainPage;