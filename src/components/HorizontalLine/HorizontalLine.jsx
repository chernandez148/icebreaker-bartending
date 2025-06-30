import React from "react";
import "./HorizontalLine.css";

function HorizontalLine({ left, right }) {
  return (
    <div className="HorizontalLine" style={{ left: left, right: right }}></div>
  );
}

export default HorizontalLine;
