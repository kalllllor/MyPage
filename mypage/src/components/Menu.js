import React, { Component } from "react";
import { motion } from "framer-motion";

import MenuList from "../components/MenuList"

import "../css/components/menu.css"

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            toggle: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        if (this.state.isVisible) {
            this.setState({
                toggle: !this.state.toggle
            })
            setTimeout(function () {
                this.setState({
                    isVisible: !this.state.isVisible
                })
            }.bind(this), 800)
        }
        else {
            this.setState({
                isVisible: !this.state.isVisible
            })
            this.setState({
                toggle: !this.state.toggle
            })
        }
    }
    render() {
        console.log(this.state.isVisible)
        const variants = {
            open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            },
            closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
        };
        const { isVisible, toggle } = this.state;
        return (
            <div className="Menu">
                <motion.nav initial={false} animate={toggle ? "open" : "closed"}>
                    <div className={isVisible ? "Menu__button button__active" : "Menu__button"} onClick={this.toggleMenu}>
                        <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                        <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                        <div className={isVisible ? "burger__button burger__active" : "burger__button"} />
                    </div>
                    <div className={`Menu__links ${isVisible ? 'Menu__links--visible' : ''}`}>
                        <MenuList />
                    </div>

                </motion.nav>
            </div>
        );
    }
}

export default Menu;
