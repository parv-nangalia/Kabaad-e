import React, { useState, useEffect } from "react";
// import { all } from "../../constants/icons";
// import { Itemdetails, Collapse } from "../../components";
// import { useNavigate } from "react-router-dom";

import "./Cartvalue.css";

const Cartvalue = ({ cart }) => {

    const price = { 'Mobile' : 500, 
        'GameController': 100,
        'MusicPlayer' : 200, 
        'Kindle': 200, 
        'Smartwatch': 150,
        'Headphones': 200,
        'VrHeadset': 700,
        'Monitor': 600,
        'Speaker': 600,
        'Router': 200,
        'Mouse': 30,
        'Keyboard': 30,
        'Printer': 60,
        'Projector': 300,
        'Scanner': 100,
        'Cable': 10,
        'SdCard': 20,
        'UsbDrive': 30,
        'Mobile': 600,
        'Camera': 400,
        'Laptop': 1000,
        //Tablet: F 
    }


    // const [cart, recart] = useState(cart);

    const [cartValue, setCartValue] = useState(0);

    function Calc(cart) {
        let totalValue = 0;
        cart.forEach((item) => {
            totalValue += price[item.key] * parseInt(item.count);
        });
        return totalValue

    }

    useEffect(() => {
        let totalValue = Calc(cart)
        setCartValue(totalValue);
    }, [cart]);

    
    return (
        <div class="app__cart-value">
            {cart.map((item,index) => (
                <div id={index} class="app__cart-price">
                    <div class="app__cart-prodname">{item.key}</div> <span> X </span><span>{item.count} </span><span> - </span><span> {price[item.key] *item.count}</span>
                </div>
            ))}
            <div class="app__cart-total">
                <span>
                    Total
                </span>
                <span>
                    <b>{cartValue}</b>
                </span>
            </div>
        </div>
    );
};

export default Cartvalue;
