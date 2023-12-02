import React from "react";

import "./SubHeading.css";

const SubHeading = ({ title }) => (
  <div className="app_wrapper-subheading" style={{ marginBottom: "1rem" }}>
    <h4 className="app_wrapper-subheading_tagline">
      You are just a few clicks away from freeing up space at your home and
      filling up some space in your wallet.
    </h4>
    <h5 className="app_wrapper-subheading_offers">{title}</h5>
  </div>
);

export default SubHeading;
