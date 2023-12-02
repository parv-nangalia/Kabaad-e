import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = ({cartVal}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__nav">
      <div className="app__nav-logo">
        <Link to="/">
          <img src={images.gericht} alt="logo" />
        </Link>
      </div>
      <ul className="app__nav-list">
        <li className="p__opensans">
          <div href="/">Home</div>
        </li>
        <li className="p__opensans">
        <div href="/Sell">Sell E-Waste</div>
        </li>
        <li className="p__opensans">
        <div href="/About">About</div>
        </li>
        {/* <li className="p__opensans">
        <a href="#Home">Contact</a>
      </li>
      <li className="p__opensans">
        <a href="#Home">FAQ</a>
      </li> */}
        <li className="p__opensans">
        <div href="#Home">Profile</div>
        </li>
      </ul>
      <div className="app__nav-login">
        <a href="/Cart" className="p__opensans">
        <Badge color="secondary" badgeContent={cartVal}>
                <ShoppingCartIcon />{" "}
        </Badge>
        </a>
      </div>
      <div className="app__nav-small">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__nav-small_overlay flex__center silde-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__nav-small-list">
              <li className="p__opensans">
                <a href="/">Home</a>
              </li>
              <li className="p__opensans">
                <a href="/Sell">Sell E-Waste</a>
              </li>
              <li className="p__opensans">
                <a href="/AboutUs">About</a>
              </li>
              {/* <li className="p__opensans">
            <a href="#Home">Contact</a>
          </li>
          <li className="p__opensans">
            <a href="#Home">FAQ</a>
          </li> */}
              <li className="p__opensans">
                <a href="/Track">Profile</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
