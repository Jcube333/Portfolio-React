import React from "react";
import "./Intro.css";
import FloatingComp from "../FloatingComp/FloatingComp";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Insta from "../../img/instagram.png";
import Jcube from "../../img/jcube.png";
import VecB from "../../img/Vector1.png";
import VecY from "../../img/Vector2.png";
import Crown from "../../img/crown.png";
import Cpp from "../../img/cpp.png";
import Emoji from "../../img/glassesimoji.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i-Wrapper">
      <div className="i-left">
        <div className="i-info">
          <h1 style={{ color: darkMode ? "white" : "black" }}>Hey! I am</h1>
          <h1>Jaimin</h1>
          <p>
            I am an avid competitive programmer. I love to design beautiful
            frontends.
          </p>
        </div>

        <div className="i-button button">Contact</div>

        <div className="i-links">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={Linkedin} alt="" />
          </a>
          <a href="">
            <img src={Insta} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img className="profImg" src={Jcube} alt="" />
        <img className="profImg" src={VecB} alt="" />
        <img className="profImg" src={VecY} alt="" />
        <div className="coolEmoji">
          <img
            // initial={{ left: "-36%" }}
            // whileInView={{ left: "-24%" }}
            // transition={transition}
            src={Emoji}
            alt=""
          />
        </div>
        <div className="floatingDiv">
          <FloatingComp image={Crown} txt1="Web" txt2="Developer" />
        </div>

        <div className="floatingDiv2">
          <FloatingComp image={Cpp} txt1="Competitive" txt2="Programmer" />
        </div>

        <div className="blur i-blur"></div>
        <div className="blur2 i-blur2"></div>
      </div>
    </div>
  );
}

export default Intro;
