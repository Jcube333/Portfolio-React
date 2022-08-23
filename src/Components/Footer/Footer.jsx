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
          <Insta color="white" size="3rem" />
          <Linkedin color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
