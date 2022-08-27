import React from "react";
import "./FloatingComp.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

function FloatingComp(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="float-Wrapper">
      <img className="float-img" src={props.image} alt="" />
      <span>
        {props.txt1}
        <br />
        {props.txt2}
      </span>
    </div>
  );
}

export default FloatingComp;
