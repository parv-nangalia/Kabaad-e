import React, { useEffect, useState } from "react";
// import { GiLaptop } from "react-icons/gi";
import {
  commonIcons,
  wearableIcons,
  householdIcons,
  miscIcons,
} from "../../constants/icons";

import "./Sellpage.css";

function ShowGadgets({ items, addToCart }) {
  return (
    <div className="app__sell-items">
      {Object.keys(items).map((key) => {
        const IconComponent = items[key]; // Get the icon component for the key
        // console.log(`Key: ${key}`);
        // console.log("Icon Component:", IconComponent);
        return (
          <div className="app__sell-icons" onClick={() => addToCart({ key })}>
            <IconComponent className="app__sell-icon" />
            <p>{key}</p>
          </div>
        );
      })}
    </div>
  );
}

const list = [
  {
    id: 1,
    head: "Common Electronics",
    items: commonIcons,
  },
  {
    id: 2,
    head: "Wearables",
    items: wearableIcons,
  },
  {
    id: 3,
    head: "Household/Offices",
    items: householdIcons,
  },
  {
    id: 4,
    head: "Miscellaneous",
    items: miscIcons,
  },
];

const Sellpage = ({ cart, updateCart }) => {
  const [expandedList, setExpandedList] = useState(null);

  const expandlist = (items) => {
    setExpandedList(items);
  };

  const addToCart = (product) => {
    //console.log(cart);
    //console.log(product);
    //console.log(IconComponent);
    //const obj = {key : product, Component: IconComponent};
    if(cart.some(item => item.key === product.key)){
      alert("item already exists")
    }
    else{
      const update = [...cart,product];
      updateCart(update);
    }
  };

  return (
    <div className="app__sell-component">
      <div className="app__sell-head">
        <h2>
          Add all the categories which you want to sell <br/><span className="app__sell-span">Give details at order page</span> 
        </h2>
      </div><br />
      <div class="app__sell-cart">
        
      </div>
      <div className="app__sell-list">
        <ul>
          {list.map((type) => (
            <div
              className="app__sell-type"
              key={type.id}
              onClick={() => expandlist(type.items)}
            >
              <h2>{type.head}</h2>
            </div>
          ))}
        </ul>
      </div>
      {expandedList && (
        <ShowGadgets items={expandedList} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Sellpage;
