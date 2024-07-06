import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Genericform, Collapse, Cartitem, Trackpage, SubHeading, Trackcomp } from "../../components";
import { all } from "../../constants/icons";
import "./Profile.css"


const Profile = () => {

    const personal = JSON.parse(localStorage.getItem("order_summary"));
    const [personalinfo, setinfo] = useState(false);
    let info;
    console.log(personal,info);

    if ((personal!==null) && (personal!==undefined)) {
        info = personal[1].contact;
    }
    else{
        info = null;
    }
    useEffect(() => {
            if (personal!==null){
               setinfo(true);
            }
     },[]);

    const [current, setCurrent] = useState('Personal Information');
    const [activeElement, setActiveElement] = useState('Personal Information');

    const handleChange = (event) => {
        var component = event.target.innerText;
        setCurrent(component);
        console.log(personal);
        setActiveElement(component);
        // setCurrent((prevCurrent) => {
        //     console.log(prevCurrent); // Previous state
        //     console.log(component);   // Updated state
        //     return component;         // Returning the updated state
        // });
    };

    return (
        <div className="profile__page"> 
            <div className="app__navigator">
                <span onClick={handleChange} className={activeElement === 'Personal Information' ? 'active' : ''}>
                    Personal Information
                </span>
                <span onClick={handleChange} className={activeElement === 'Order History' ? 'active' : ''}>
                    Order History
                </span>
            </div>
            {
            current === "Personal Information" && 
            <div className="profile__summary">
                <div className="profile__heading">
                    Personal Information
                </div>
                {personalinfo && <div className="profile__info">
                    <div className="profile__cards">
                        {info.username}
                    </div>
                    <div className="profile__cards">
                        {info.phone}
                    </div>
                    <div className="profile__cards">
                        {info.address}
                    </div>
                </div>}
                <div className="profile__points">

                </div>
            </div>
            }
            
            {
            current === "Order History" && 
            <div className="profile__activity">
                <div className="profile__heading">
                    <span>Orders</span>
                </div> 
                <div className="profile__activity-collapsible">
                    { personal  ? (<Trackcomp/>) : (<div>
                        <br/><br/>
                        <h3>Hurry Up!!</h3>
                        <h5>Get 2x rewards on first 3 orders</h5>
                        <h4>Place your first order now!</h4>
                    </div>)}
                </div>
            </div>
            }
        </div>
    );
};

export default Profile;