import React, { useState, useEffect } from "react";
import { all } from "../../constants/icons";
import "./Trackpage.css";
import {Cartitem} from "../../components";


const Trackpage = () => {
  const [order, setOrder] = useState({});

  const [cart, setCart] = useState({});

  useEffect(() => {
    // Fetch the item from local storage
    const storedData = localStorage.getItem("order_summary");
    const storedData2 = localStorage.getItem("ordercart");

    // Parse the JSON data if it's stored as a JSON string
    const parsedData = JSON.parse(storedData);
    const parsedData2 = JSON.parse(storedData2);
    // Set the parsed data in state or use it as needed
    setOrder(parsedData);
    setCart(parsedData2);
    // You might want to clear the item from local storage after fetching
    // localStorage.removeItem("ordercart");
  }, []);

  return (
    <div className="" style={{ marginBottom: "1rem" }}>
      <h1>Show the order summary</h1>
      <div>
        {/* {Object.keys(cart).map((item, index) => (
          <div key={index}>
            <div className="app__cart-item">
              <div className="app__cart-header">
                {all[item] &&
                  React.createElement(all[item], {
                    className: "app__cart-img",
                  })}
              </div>
            </div>
          </div>
        ))} */}
        < Cartitem jsonData={cart}/>
      </div>
      <div>
        {Object.keys(order).map((item, index) => {
          const values = order[item];
          return (
            <div key={index}>
              <h4>{item}</h4>
              {Object.keys(values).map((property, propertyIndex) => (
                <p key={propertyIndex}>{` ${values[property]}`}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trackpage;
