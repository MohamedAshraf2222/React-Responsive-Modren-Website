import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
      <div className="gpt3__feature-container">
        <div className="gpt3__feature-container_title">
          <div />
          <h2>{title}</h2>
        </div>
        <div className="gpt3__feature-container_text">
          <p>{text}</p>
        </div>
      </div>
  );
};

export default Feature;
