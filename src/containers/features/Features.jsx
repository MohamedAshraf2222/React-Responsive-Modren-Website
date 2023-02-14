import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => {
  return (
    <div className="section-padding gpt3__features" id="features">
      <div className="gpt3__features-blur-ball"></div>
      <div className="gpt3__features-heading">
        <h2 className="gradient-text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="flex-1 gpt3__features-container">
        {featuresData.map((feature, i) => (
          <div>
            <Feature
              title={feature.title}
              text={feature.text}
              key={feature.title + i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
