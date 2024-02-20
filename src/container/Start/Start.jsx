import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { images } from "../../constants";
import { CaroHome } from "..";
import "./Start.css";

const Start = () => (
  <div>
    <div className="app__start" id="start">
      <br />
      <div className="app__start-heading">
        <h2><b>How does this work?</b></h2>
      </div>
      {/* <div className="app__start-image">
        <img src={images.cart_illus}></img>
      </div> */}
      {/* <div className="app__start-content"> */}
        {/* <p>
          Start by adding all your E-waste to your cart from the wide selection
          of products that we deal in
        </p>
        <p> Enter your details and choose a day for the item's pickup. </p>
        <p>
          Get the equivalent amount of credit, points or gift card in your
          wallet 
        </p> */}
        <CaroHome />
        {/* <Link
          to="start"
          activeClass="active"
          spy={true}
          smooth={true}
          onClick={handleScroll}
          >
          <button className="custom__button"> Sell Now </button>
        </Link> */}
      {/* </div> */}
      {/* <CaroHome /> */}
      <div className="app-sell"><Link to="/Sell">
        <button className="butn"> Sell Now </button>
      </Link>
      </div>
    </div>
    {/* <CaroHome /> */}
  </div>
);

export default Start;
