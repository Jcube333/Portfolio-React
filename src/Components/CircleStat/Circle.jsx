import React from "react";
import "./Circle.css";

function Circle(props) {
  return (
    <div className="Stat-Wrapper">
      <div className="stat-circle">{props.n}</div>
      <span>{props.title}</span>
      <span>{props.desc}</span>
    </div>
  );
}

export default Circle;
