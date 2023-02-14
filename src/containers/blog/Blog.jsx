import React from "react";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div className="gpt3__blog section-padding" id="blog">
      <h4 className="gradient-text">
        A lot is happening,
        <br /> We are blogging about it.
      </h4>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article image={blog1} p1={'Sep 26, 2021'} h4={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} p2={'Read Full Article'} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article image={blog2}  p1={'Sep 26, 2021'} h4={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} p2={'Read Full Article'} />
          <Article image={blog3}  p1={'Sep 26, 2021'} h4={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} p2={'Read Full Article'} />
          <Article image={blog4}  p1={'Sep 26, 2021'} h4={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} p2={'Read Full Article'} />
          <Article image={blog5}  p1={'Sep 26, 2021'} h4={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} p2={'Read Full Article'} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
