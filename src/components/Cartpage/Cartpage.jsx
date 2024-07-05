import React, { useState, useEffect } from "react";
import { all } from "../../constants/icons";
import { Itemdetails, Collapse, Cartvalue } from "../../components";
import { useNavigate } from "react-router-dom";

import "./Cartpage.css";

const Cartpage = ({ cart }) => {
  //const [clickedDiv, setclickedDiv] = useState(null);
  //const [form, setForm] = useState(false);
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({});

  const [formValues, setFormValues] = useState({});

  const handleFormSubmit = (index, formData) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [index]: {
          ...(prevFormValues[index] || {}), // Preserve existing data for the index
          ...formData,
        },
      };
    });

    console.log(formValues);
  };

  const setCart = (car) => {
    car.forEach((item) => {
      item["count"] = 1;
    });
    console.log("inserting count", car);

    return car;
  };

  const setorderCart = (props) => {
    localStorage.setItem("ordercart", props);
  };

  const initialCart = setCart([...cart]);

  const [modifiedcart, setModifiedCart] = useState(initialCart);

  useEffect(() => {
    setModifiedCart(initialCart);
  }, [cart]);

  console.log(modifiedcart);

  const increment = (prop) => {
    setModifiedCart((prevCart) =>
      prevCart.map((item) =>
        item.key === prop.key ? { ...item, count: item.count + 1 } : item
      ),
    );
      console.log("increment", prop, modifiedcart, cart);
  };

  const decrement = (prop) => {
    setModifiedCart((prevCart) =>
      prevCart.map((item) =>
        item.key === prop.key
          ? { ...item, count: Math.max(item.count - 1, 1) }
          : item,
      ),
    );
  };

  useEffect(() => {
    if (cart.length > 0) {
      const initialInputValues = {};
      //const itemcount = {};
      modifiedcart.forEach((item) => {
        //itemcount[item.key] = item.count;

        const keys = Array.from({ length: item.count }, (_, index) => index);
        keys.forEach((key) => {
          initialInputValues[item.key] = {
            ...initialInputValues[item.key],
            [key]: {
              Age: 0,
              brand: "No Brand",
              Condition: "Unsure",
            },
          };
        });
      });
      setInputValues(initialInputValues);
      //setCount(itemcount);
      //console.log("itemcount", itemcount);
      console.log("initial", initialInputValues);
      console.log("cart", cart);
      console.log("modified", modifiedcart);
    }
  }, [modifiedcart]);

  const submitForm = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formValues);
    console.log(jsonData);
    console.log("Form submitted");
    //window.location.href = "/Order";
    navigate("/Order");
    //console.log("hi");
    setorderCart(jsonData);
    console.log("setorderCart called");
    const storedData = localStorage.getItem("ordercart");

    localStorage.setItem("cart",  JSON.stringify([]));
    // Parse the JSON data if it's stored as a JSON string
    const parsedData = JSON.parse(storedData);
    

    // Use the retrieved data as needed
    console.log(parsedData);
  };

  return (
    <div className="app__cart-main">
      <h2>Cart</h2>
      { cart.length > 0 ? (
      <>
        <div class="app__cart-sub">
          <div class="Cart-details">
          {/* <ul> */}
            <form onSubmit={submitForm}>
              {modifiedcart.map((item, index) => (
                <li key={index}>
                  <div className="app__cart-item">
                    <div className="app__cart-header">
                      <div  className="header-left">
                        {all[item.key] &&
                          React.createElement(all[item.key], {
                            className: "app__cart-img",
                          })}
                        <span className="app__cart-desc">{item.key}</span>
                      </div>
                      <div className="app__cart-itemcount">
                        <button type="button" onClick={() => decrement(item)}>
                          {" "}
                          -{" "}
                        </button>
                        <span>{item.count}</span>
                        <button type="button" onClick={() => increment(item)}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    {Array.from({ length: item.count }).map((_, i) => (
                      <div
                        className="app__cart-item-collapse"
                        key={`${item.key}-${i}`}
                      >
                        <Collapse
                          component={
                            <Itemdetails
                              index={index}
                              item={item.key}
                              //savedetails={() => savedetails(index)}.  onClick={decrement(item.key)}
                              // displayForm={displayform}               onClick={increment(item.key)}
                              inputValues={inputValues[item.key]}
                              onFormSubmit={handleFormSubmit}
                              num={i}
                            />
                          }
                        />
                      </div>
                    ))}
                  </div>
                </li>
              ))}
              <div className="Cart__submit">
                <button type="submit">Procees to Checkout</button>
              </div>
            </form>
          {/* </ul> */}
          </div>
          <div class="Cart-amount">
            <Cartvalue cart={modifiedcart}/>
          </div>
      </div>
      </>
      ) : (
        <h4>Please add items in the cart.</h4>
      )}
    </div>
  );
};

export default Cartpage;
