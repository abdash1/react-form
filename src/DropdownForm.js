import React, { useState } from 'react';

const DropdownForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    country: ''
  });

  // Handle change in dropdowns
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected City:", formData.city);
    console.log("Selected Country:", formData.country);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* City Dropdown */}
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a city</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="san-francisco">San Francisco</option>
          <option value="miami">Miami</option>
        </select>
      </div>

      {/* Country Dropdown */}
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DropdownForm;
