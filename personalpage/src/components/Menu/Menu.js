import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "components/Menu/Menu.module.scss";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      toggle: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const { isVisible, toggle } = this.state;
    if (isVisible) {
      this.setState({
        toggle: !toggle,
      });
      setTimeout(
        function () {
          this.setState({
            isVisible: !isVisible,
          });
        }.bind(this),
        400
      );
    } else {
      this.setState({
        isVisible: !isVisible,
      });
      this.setState({
        toggle: !toggle,
      });
    }
  };

  render() {
    const menuTitles = [
      {
        title: "PROJECTS",
        link: "project",
        delay: "0.1",
      },
      {
        title: "ABOUT",
        link: "about",
        delay: "0.15",
      },
      {
        title: "CONTACT",
        link: "contact",
        delay: "0.2",
      },
    ];
    const { isVisible, toggle } = this.state;
    return (
      <div className="Menu">
        <motion.nav initial={false} animate={toggle ? "open" : "closed"}>
          <div
            className={
              isVisible ? styles.Menu__buttonActive : styles.Menu__button
            }
            onClick={this.toggleMenu}
          >
            <div className={styles.burger__button} />
            <div className={styles.burger__button} />
            <div className={styles.burger__button} />
          </div>
          <div
            className={
              isVisible ? styles.Menu__linksVisible : styles.Menu__links
            }
          >
            <motion.ul>
              {menuTitles.map((item) => (
                <motion.li
                  key={item.title}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: item.delay * 4,
                        y: { stiffness: 1000 },
                      },
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        delay: item.delay,
                        y: { stiffness: 1000 },
                      },
                    },
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    onClick={this.toggleMenu}
                    to={item.link}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                  >
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
