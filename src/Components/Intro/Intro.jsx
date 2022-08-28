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
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="Home" className="i-Wrapper">
      <div className="i-left">
        <div className="i-info">
          <h1 style={{ color: darkMode ? "white" : "black" }}>Hey! I am</h1>
          <h1>Jaimin</h1>
          <p>
            I am an avid competitive programmer. I love to design beautiful
            frontends.
          </p>
        </div>
        <Link to="Contact" smooth={true}>
          <div className="i-button button">Contact</div>
        </Link>

        <div className="i-links">
          <a href="https://github.com/Jcube333">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jaimin-judal/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/p/CgpRlURh0i_/?hl=en">
            <img src={Insta} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img className="profImg" src={Jcube} alt="" />
        <img className="profImg" src={VecB} alt="" />
        <img className="profImg" src={VecY} alt="" />

        <motion.img
          initial={{ left: "-40%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Emoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-8%", right: "-20%" }}
          whileInView={{ top: "-8%", right: "5%" }}
          transition={transition}
          className="floatingDiv"
        >
          <FloatingComp image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ bottom: "30%", left: "-20%" }}
          whileInView={{ bottom: "30%", left: "4%" }}
          transition={transition}
          className="floatingDiv2"
        >
          <FloatingComp image={Cpp} txt1="Competitive" txt2="Programmer" />
        </motion.div>

        <div className="blur i-blur"></div>
        <div className="blur2 i-blur2"></div>
      </div>
    </div>
  );
}

export default Intro;
