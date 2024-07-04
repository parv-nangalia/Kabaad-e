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
          <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__nav-list">
        <li className="p__opensans">
          <Link to="/" className="p__opensans">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/Sell" className="p__opensans">Sell E-Waste</Link>
        </li>
        <li className="p__opensans">
          <Link to="/About" className="p__opensans">About</Link>
        </li>
        {/* <li className="p__opensans">
        <a href="#Home">Contact</a>
      </li>
      <li className="p__opensans">
        <a href="#Home">FAQ</a>
      </li> */}
        <li className="p__opensans">
        <Link to="/Profile" className="p__opensans">Profile</Link>
        </li>
      </ul>
      <div className="app__nav-login">
        <Link to="/Cart" className="p__opensans">
        <Badge color="secondary" badgeContent={cartVal}>
                <ShoppingCartIcon />{" "}
        </Badge>
        </Link>
      </div>
      <div className="app__nav-small">
        <GiHamburgerMenu
          color="#000"
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
                <Link to="/" className="p__opensans"  onClick={() => setToggleMenu(false)} >Home</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Sell" className="p__opensans"  onClick={() => setToggleMenu(false)} >Sell E-Waste</Link>
              </li>
              <li className="p__opensans">
                <Link to="/About" className="p__opensans"  onClick={() => setToggleMenu(false)} >About</Link>
              </li>
              {/* <li className="p__opensans">
            <a href="#Home">Contact</a>
          </li>
          <li className="p__opensans">
            <a href="#Home">FAQ</a>
          </li> */}
              <li className="p__opensans">
                <Link to="/Profile" className="p__opensans"  onClick={() => setToggleMenu(false)} >Profile</Link>
              </li>
              <li className="p__opensans">
                <Link to="/Cart" onClick={() => setToggleMenu(false)}>
                  <Badge color="secondary" badgeContent={cartVal}>
                          <ShoppingCartIcon />{" "}
                  </Badge>
                </Link>
              </li>
            </ul>
           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
