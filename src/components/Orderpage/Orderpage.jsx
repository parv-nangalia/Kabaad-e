import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Genericform, Collapse, Cartitem, Cartvalue } from "../../components";
import "./Orderpage.css";
import { all } from "../../constants/icons";

const Orderpage = ({ Order }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});

  const [itemdata, setitemdata] = useState({});

  const [cartcomp, setCartcomp] = useState("None");

  const [formVisibility, setFormVisibility] = useState({
    contact: "flex",
    pickup: "none",
    wallet: "none",
    submit: "none",
  });

  const Ordersummary = (summary) => {

    let curr_summary = localStorage.getItem("order_summary");
    let size =  1;

    let summ = JSON.parse(summary);
    console.log(summary, typeof(summary));


    if (curr_summary === null || curr_summary === undefined) {
      curr_summary = {}; // Initialize as an empty object
    } else {
      //  k curr_summary = JSON.parse(curr_summary);
        size = Object.keys(curr_summary).length + 1;
    }

    curr_summary[size] = summ;  
    localStorage.setItem("order_summary",JSON.stringify(curr_summary));
    return size;
  };

  const PlaceOrder = () => {
    const jsonData = JSON.stringify(formValues);
    let index = Ordersummary(jsonData);
    console.log("setsummary called", index);
    const order = localStorage.getItem("order_summary");
    console.log(order);

    // Parse the JSON data if it's stored as a JSON string
    const parsedData = JSON.parse(order);

    // Use the retrieved data as needed
    console.log(parsedData);
    // localStorage.setItem("ordercart",{});
    navigate("/Track",{ state: { ind : index } });
  };

  const displayCart = (cartcomp) => {
    setCartcomp(cartcomp === "None" ? "flex" : "None");
  };

  const Contact = [
    { name: "username", label: "Full Name" },
    { name: "phone", label: "Phone Number", type: "number" },
    { name: "address", label: "Address" },
  ];

  const Pickup = [
    { name: "date", label: "Pickup Date", type: "date" },
    { name: "time", label: "Pickup Time", type: "time" },
  ];

  const Wallet = [
    { name: "wallet", label: "Wallet" },
    { name: "other", label: "UPI/Bank Transfer" },
  ];

  const handleFormSubmit = (formName, formData) => {
    setFormValues((formValues) => ({
      ...formValues, // Preserve existing data for the index
      [formName]: formData,
    }));
    console.log(formData);
    console.log(formValues);

    setFormVisibility((prevVisibility) => {
      const nextVisibility = { ...prevVisibility, [formName]: "none" };

      // Determine the next form to uncollapse
      if (formName === "contact") {
        nextVisibility.pickup = "flex";
      } else if (formName === "pickup") {
        nextVisibility.wallet = "flex";
      } else if (formName === "wallet") {
        nextVisibility.submit = "block";
      }

      return nextVisibility;
    });
  };

  useEffect(() => {
    // Fetch the item from local storage
    const storedData = localStorage.getItem("ordercart");

    // Parse the JSON data if it's stored as a JSON string
    if(storedData!==null){
    const parsedData = JSON.parse(storedData);
    // Set the parsed data in state or use it as needed
    setitemdata(parsedData);
    }
    // You might want to clear the item from local storage after fetching
    // localStorage.removeItem("ordercart");
  }, []);

  return (
    //<form className="app__item-form" onSubmit={(e) => handleSubmit(e)}>
    <div className="app__order-main">
      <div>
        <button onClick={() => displayCart(cartcomp)}>View Cart</button>
      </div>

      <div className="app__order-cart" style={{ display: cartcomp }}>
        <Cartitem jsonData={itemdata} />
      </div>

      <div class="app__order_main">
      <div className="app__order-orderdeets">
        <h3>Contact Details</h3>
        <div
          className="app__order-form"
          style={{ display: formVisibility.contact }}
        >
          <Genericform
            fields={Contact}
            onSubmit={(data) => handleFormSubmit("contact", data)}
          />
        </div>
        <h3>Select a Pickup Date and Time</h3>
        <div
          className="app__order-form"
          style={{ display: formVisibility.pickup }}
        >
          <Genericform
            fields={Pickup}
            onSubmit={(data) => handleFormSubmit("pickup", data)}
          />
        </div>
        <h3>Wallet/Cashback details</h3>
        <div
          className="app__order-form"
          style={{ display: formVisibility.wallet }}
        >
          <Genericform
            fields={Wallet}
            onSubmit={(data) => handleFormSubmit("wallet", data)}
          />
        </div>
        <button onClick={PlaceOrder} style={{ display: formVisibility.submit }}>
          Place Order
        </button>
      </div>
      <div class="app__cart_price">
        {/* <Cartvalue cart={modifiedcart}/> */}
      </div>
      </div>
    </div>
  );
};

export default Orderpage;
