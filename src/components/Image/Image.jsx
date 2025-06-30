import React, { useEffect } from "react";
import "./Image.css";

function Image({ image, alt }) {
  return (
    <div className="Image">
      <div className="image-wrapper">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

export default Image;
