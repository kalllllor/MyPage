import * as React from "react";
import { motion, Variants } from "framer-motion";
import styled from "components/Media/Media.module.scss";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import facebook from "assets/socials/facebook.png";
import instagram from "assets/socials/instagram.png";
import github from "assets/socials/github.png";
import linkedin from "assets/socials/linkedin.png";

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

const containerVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Media() {
  return (
    <>
      <Paragraph style={{ paddingLeft: "15px" }}>Media</Paragraph>
      <motion.ul
        className={styled.list}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialsArray.map((item) => (
          <motion.li
            key={item.index}
            className={styled.item}
            variants={childVariants}
          >
            <img src={item.icon} alt={item.tekst} />
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}

export default Media;
