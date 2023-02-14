import React from "react";
import "./article.css";

const Article = ({ image, p1, h4, p2 }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt="img" />
      </div>
      <div className="gpt3__article-content">
        <div className="gpt3__article-top">
          <p>{p1}</p>
          <h4>{h4}</h4>
        </div>
        <div className="gpt3__article-bottom">
          <p>{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
