import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";
const WhatGPT3 = () => {
  return (
    <>
      <div
        className="gpt3__whatgpt3 overflow-hidden section-margin z-0 relative"
        id="wgpt3"
      >
        <div className="gpt3__whatgpt3-blur-ball-1"></div>
        <div className="gpt3__whatgpt3-blur-ball-2"></div>
        <div className="gpt3__whatgpt3-blur-ball-3"></div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            title={"What is GPT-3"}
            text={
              "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            }
          />
          <div className="gpt3__whatgpt3-heading">
            <h2 className="gradient-text">The possibilities are beyond your imagination</h2>
            <p>Explore The Library</p>
          </div>
          <div className="gpt3__whatgpt3-feature-container">
          <Feature
            title={"Chatbots"}
            text={
              'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
            }
          />
          <Feature
            title={"Knowledgebase"}
            text={
              'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
            }
          />
          <Feature
            title={"Education"}
            text={
              'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
            }
            />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default WhatGPT3;
