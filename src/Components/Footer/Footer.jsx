import React from "react";

import "./Footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
function Footer() {
  return (
    <div className="Footer">
      <img style={{ width: "100%" }} src={wave} alt="" />

      <div className="f-content">
        <span>Jaiminjagdish@gmail.com</span>

        <div className="f-icons">
          <a href="https://www.instagram.com/p/CgpRlURh0i_/?hl=en">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/jaimin-judal/">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="https://github.com/Jcube333">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
