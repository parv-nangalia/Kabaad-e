import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import "./Trackcomp.css";

const Trackcomp = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState({});

    useEffect(() => {
        const order = localStorage.getItem('order_summary');
        if (order) {
            const parsedOrder = JSON.parse(order);
            setDetails(parsedOrder);
            console.log(parsedOrder);
        }
    }, []);

    const Orderdeets = (i) => {
        console.log(i);
        navigate("/Track",{ state: { ind : i } });
    };
    
return (
  <div className="app__track" style={{ marginBottom: "1rem" }}>
    <div className="app__track-main">
    {Object.entries(details).map(([key, value]) => (
                    <div className="app__track-div" onClick={() => Orderdeets(key)} key={key}>
                        <div className="app__track-left" >{key}</div>
                        <div className="app__track-right">Scehduled on {value["pickup"]["date"]} at {value["pickup"]["time"]}</div>
                    </div>
                ))}
      
    </div>
  </div>
);
}

export default Trackcomp;