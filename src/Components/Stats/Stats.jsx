import React from "react";
import "./Stats.css";
import Circle from "../CircleStat/Circle";

function Stats() {
  return (
    <div className="Stats-Wrapper">
      <Circle n="9.5+" title="CGPA" desc="MUJ" />
      <Circle n="3⭐️" title="1709" desc="Rating" />
      <Circle n="5+" title="Completed" desc="Projects" />
    </div>
  );
}

export default Stats;
