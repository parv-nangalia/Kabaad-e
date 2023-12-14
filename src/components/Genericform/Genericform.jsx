import React, { useState } from "react";

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
        <label key={field.name}>
          {field.label}:
          <input
            type={field.type || "text"}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
          />
        </label>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default GenericForm;
