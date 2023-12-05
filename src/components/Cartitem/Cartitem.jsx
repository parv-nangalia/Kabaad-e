import React from "react";
import { all } from "../../constants/icons";
import "./Cartitem.css";



const Cartitem = ({jsonData}) => {

    return (
        <div className="Cart__main">
        {Object.keys(jsonData).map((key) => {
          const outerValue = jsonData[key];
          console.log(outerValue);

          return (
            
            <div key={key} className="Cart__item">
              <div className="Cart__icon">
              {all[key] &&
                  React.createElement(all[key], {
                    className: "app__cart-img",
                  })}
              </div>
              <div className="Cart__detail">
                {Object.entries(outerValue).map(([inkey, invalue]) => {
                  const inner = invalue;
                  //console.log("inner", inner);

                  return (
                    <div key={inkey} className="Cart__detail-p">
                        {Object.keys(inner).map((each) => {
                          const abc = inner[each];
                          //console.log("abc", abc);
                          return (
                            <div key={each}>
                              <p>{abc}</p>
                            </div>
                          );
                        })}
                      </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
)}

export default Cartitem;