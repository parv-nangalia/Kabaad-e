// import logo from './logo.svg';
import './App.css';

// function App() {
//   return 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Sellpage,
  Cartpage,
  Orderpage,
  Trackpage,
  Profile,
} from "./components";
import { AboutUs, Footer } from "./container";
import "./App.css";
//import { Route, Switch } from "react-router";

// import Homepage as home from "./components/Homepage";
// import Sellpage as sell from "./components/Sellpage";

const App = () => {
  const [cart, setCart] = useState([]);

  const [ordercart, setordercart] = useState([]);

  const [order, setOrder] = useState([]);

  const [cartVal, setCartVal] = React.useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart).length : 0;
  });

  useEffect(() => {
    // Retrieve the cart data from localStorage on app load
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }

    const ordercart = JSON.parse(localStorage.getItem("ordercart"));
    if (ordercart) {
      setordercart(ordercart);
    }

    const order = JSON.parse(localStorage.getItem("order_summary"));
    if (order) {
      setOrder(order);
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    //setCartVal(cartVal + 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartVal(newCart.length);
    console.log(cartVal);
  };

  return (
    <Router basename="">
      <div>
        <Navbar cartVal={cartVal} />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Sell" element={<Sellpage cart={cart} updateCart={updateCart} />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Cart" element={<Cartpage cart={cart} />} />
          <Route path="/Order" element={<Orderpage order={ordercart} />} />
          <Route path="/Track" element={<Trackpage />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;