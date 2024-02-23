import React, { useState } from "react";
import "./Genericform.css";


const GenericForm = ({ fields, onSubmit }) => {
  const initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = field.defaultValue || "";
  });

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div class="form__field">
          <label key={field.name}>
            <span>{field.label} &nbsp;&nbsp;:</span>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
            />
          </label>
        </div>
      ))}
      <div class="form_submit"><button type="submit">Save</button></div>
    </form>
  );
};

export default GenericForm;
