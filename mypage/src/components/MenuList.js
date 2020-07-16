import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "../components/MenuItem"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const menuTitles = [{
    title: "PROJECTS",
    link: "/project",
    delay: "0.3"
}, {
    title: "ABOUT",
    link: "/about",
    delay: "0.4"
}, {
    title: "CONTACT",
    link: "/contact",
    delay: "0.5"
}]
function MenuList() {
    return (
        <motion.ul variants={variants}>
            {menuTitles.map((item, id) => (
                <MenuItem key={id} data={item} />
            ))}
        </motion.ul>
    )
}

export default MenuList
