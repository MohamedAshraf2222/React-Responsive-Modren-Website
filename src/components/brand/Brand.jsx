import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <>
      <div className="flex justify-center gap-12 section-padding flex-wrap items-center relative overflow-x-hidden">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
        {/* <div className="brand"></div> */}
      </div>
    </>
  );
};

export default Brand;
