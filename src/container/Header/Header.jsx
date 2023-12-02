import React from "react";
import { Link } from "react-scroll";
import { SubHeading } from "../../components";
import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  const handleScroll = () => {
    // Implement your scrolling logic here
  };
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_img">
        <img src={images.header_img} alt="header_image"></img>
      </div>
      <div className="app__wrapper_info">
        <h1 className="app__header-h1"> E-junk to E-money </h1>
        <SubHeading title="Get 2x rewards on first 3 orders" />
        <Link
          to="start"
          activeClass="active"
          spy={true}
          smooth={true}
          onClick={handleScroll}
        >
          <button className="custom__button"> Get Started </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
