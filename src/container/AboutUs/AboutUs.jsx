import React from "react";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__about-main">
    <div className="app__about-parent">
      <h2>About Us</h2>
        <p className="app__about-parent-para">
            Welcome to Kabaad-e, where we turn e-waste into opportunity and innovation!
        </p>
        <h3>Our Story</h3>
        <p className="app__about-parent-para">
          In a world where technology evolves at lightning speed, discarded electronics often end up in landfills, 
          contributing to environmental pollution and resource depletion. Kabaad-e was born from a simple 
          yet powerful idea: to create a sustainable future by transforming electronic waste into valuable resources.<br/><br/>

          It all started with our founder, Jane Smith, a passionate environmentalist and tech enthusiast. While working
            at a major tech company, Jane witnessed firsthand the mountains of e-waste generated every day. She realized that these
          discarded gadgets, though no longer useful to their owners, still held immense potential. With a vision to make a difference,
            she left her corporate job and embarked on a mission to revolutionize how we view and handle e-waste.
        </p>
        <h3>Our Commitment</h3>
        <p className="app__about-parent-para"> 
            GreenCycle is committed to promoting sustainability and reducing e-waste.
            We partner with certified recycling facilities to ensure that electronics that can’t
            be resold are disposed of responsibly. Our goal is to minimize the environmental impact of
            electronic waste and foster a culture of reuse and recycling.
        </p>
    </div>

  </div>
);

export default AboutUs;
