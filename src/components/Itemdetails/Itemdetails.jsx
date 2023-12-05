import React, { useState } from "react";

const Itemdetails = ({ index, item, inputValues, onFormSubmit, num }) => {
  //const [formData, setformData] = useState(inputValues);

  // const handleOptionChange = (e) => {
  //     setSelectedOption(e.target.value);
  // };
  const { Age, brand, Condition } =
    inputValues && inputValues[num] ? inputValues[num] : {};

  // Manage the state for each input field
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [num]: {
        ...prevData[num],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    console.log("in item form submitted");
    e.preventDefault();
    console.log(formData);
    //this.props.onFormSubmit(index, formData);
    onFormSubmit(item, formData); // Pass the form data to the parent component
  };

  return (
    //<form className="app__item-form" onSubmit={(e) => handleSubmit(e)}>

    <div key={index} className="app__item-form">
      <div className="app__item-field">
        <label htmlFor="Age">How old is your product</label>
        <select
          id="Age"
          name="Age"
          value={formData.Age}
          onChange={handleInputChange}
        >
          <option value="0-2">0-2 Years</option>
          <option value="2-5">2-5 Years</option>
          <option value="Above 5">Above 5 Yeards</option>
        </select>
      </div>
      <div className="app__item-field">
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
        />
      </div>
      <div className="app__item-field">
        <label htmlFor="Condition">Condition</label>
        <select
          id="Condition"
          name="Condition"
          value={formData.Condition}
          onChange={handleInputChange}
        >
          <option value="Working">Working</option>
          <option value="Not Working">Not Working</option>
        </select>
      </div>
      {/* //<button type="submit">Save Details</button> */}
      <button type="button" onClick={(e) => handleSubmit(e)}>
        Save Details
      </button>
    </div>
    //</form>
  );
};

export default Itemdetails;
