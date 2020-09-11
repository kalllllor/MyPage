import facebook from "assets/socials/facebook.png";
import instagram from "assets/socials/instagram.png";
import github from "assets/socials/github.png";
import linkedin from "assets/socials/linkedin.png";

export const Config = {
  parent: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  },

  children: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },

  socials: [
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
  ],
};
