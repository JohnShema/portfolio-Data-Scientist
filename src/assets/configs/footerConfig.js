import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import React from "react";

const footerConfig = {
  icons: [
    {
      id: "footer-0",
      url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
      className: "social-icon",
      target: "_blank",
      icon: <AiFillGithub size={50} />,
    },
    {
      id: "footer-1",
      url: "https://www.linkedin.com/in/kevin-shema?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0DugRsMZS0SctzDl7REwUA%3D%3D",
      className: "social-icon",
      target: "_blank",
      icon: <FaLinkedinIn size={50} />,
    },
    {
      id: "footer-2",
      url: "https://github.com/JohnShema/portfolio-Data-Scientist.git",
      className: "social-icon",
      target: "_blank",
      icon: <BsMedium size={50} />,
    },
  ],
};

export default footerConfig;
