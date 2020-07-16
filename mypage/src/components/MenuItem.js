import * as React from "react";
import { motion } from "framer-motion";

function MenuItem(props) {
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                delay: props.data.delay,
                y: { stiffness: 1000 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                delay: props.data.delay,
                y: { stiffness: 1000 }
            }
        }
    };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
        >
            <h1>{props.data.title}</h1>
        </motion.li>
    );
}

export default MenuItem
