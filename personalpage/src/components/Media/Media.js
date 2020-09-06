import * as React from "react";
import { motion } from "framer-motion";

import "components/Media/socials.css";

import facebook from "assets/socials/facebook.png";
import instagram from "assets/socials/instagram.png";
import github from "assets/socials/github.png";
import linkedin from "assets/socials/linkedin.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const config = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const socialsArray = [
  {
    tekst: "facebook",
    icon: facebook,
  },
  {
    tekst: "instagram",
    icon: instagram,
  },
  {
    tekst: "github",
    icon: github,
  },
  {
    tekst: "linkedin",
    icon: linkedin,
  },
];

function Socials() {
  return (
    <div className="Socials">
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {socialsArray.map((item) => (
          <motion.li
            key={item.index}
            className="social__item"
            variants={config}
          >
            <img src={item.icon} alt={item.tekst} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Socials;
