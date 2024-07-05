import React, { useState } from "react";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app__footer-main">
      <div>
        <div className="app__footer-image">
          <img src={images.footer} alt="header_image"></img>
        </div>
        <div className="app__footer-content">
          <span className="app__footer-content-1">
            Having issue while placing an Order?
          </span>
          <span className="app__footer-content-2">
            Provide your number to get a callback.<br />
            <form>
              <input 
                style={{ marginTop:'5%', width:'50%'}} 
                type="Phone" 
                onKeyUp={handleKeyUp} 
                className="app__footer-content-number" 
                placeholder="Enter your Number"
              />
              <span style={{display:'flex', justifyItems:'end'}}>
                <button 
                  type="submit" 
                  style={{ display: inputValue ? 'block' : 'none' }}
                >
                  Submit
                </button>
              </span>
            </form>
          </span>
        </div>
      </div>
      <div className="app__footer-main-div">
        <div className="app__footer-rights">All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;