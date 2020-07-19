import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";


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
            }.bind(this), 400)
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
        const menuTitles = [{
            title: "PROJECTS",
            link: "project",
            delay: "0.1"
        }, {
            title: "ABOUT",
            link: "about",
            delay: "0.15"
        }, {
            title: "CONTACT",
            link: "contact",
            delay: "0.2"
        }]
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
                        <motion.ul>
                            {menuTitles.map((item) => (
                                <motion.li
                                    variants={{
                                        open: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                delay: item.delay * 4,
                                                y: { stiffness: 1000 }
                                            }
                                        },
                                        closed: {
                                            y: 50,
                                            opacity: 0,
                                            transition: {
                                                delay: item.delay,
                                                y: { stiffness: 1000 }
                                            }
                                        }
                                    }}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link onClick={this.toggleMenu} to={item.link} spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>
                                        <h1>{item.title}</h1>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                </motion.nav>
            </div>
        );
    }
}

export default Menu;
