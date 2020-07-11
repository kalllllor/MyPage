import * as React from "react";
import { motion } from "framer-motion";

import "../css/components/logo.css"

import logo from "../assets/logo.png"

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


const config2 = {
    hidden: { x: 30, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};


function Logo() {
    return (
        <motion.div className="logo__container"
            variants={container}
            initial="hidden"
            animate="visible">
            <motion.div className="logo__image" variants={config}>
                <img src={logo} alt="logo" />
            </motion.div>
            <motion.div className="logo__email" variants={config2}>
                <a href="mailto:karolgren@gmail.com">karolgren3@gmail.com</a>
            </motion.div>
        </motion.div>
    )
}

export default Logo