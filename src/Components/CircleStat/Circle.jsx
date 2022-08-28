import React from "react";
import "./Circle.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

function Circle(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Stat-Wrapper">
      <div
        style={{ border: darkMode ? "5px solid orange " : "" }}
        className="stat-circle"
      >
        {props.n}
      </div>
      <span>{props.title}</span>
      <span>{props.desc}</span>
    </div>
  );
}

export default Circle;
