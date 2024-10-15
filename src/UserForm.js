import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const initialFormData = {
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: 'male',
    city: '',
    country: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [log, setLog] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (checked ? 'female' : 'male') : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog([...log, formData]);
    console.log(formData);
    setFormData(initialFormData);
  };

  const clearLog = () => {
    setLog([]);
    console.clear();
  };

  return (
    <div className='container'>
      <h2>User Form</h2>
     
      <form onSubmit={handleSubmit} className="user-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age Field */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender Switch */}
        <div className="form-group gender-switch">
          <label>Gender:</label>
          <label className="switch">
            <input
              type="checkbox"
              name="gender"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
          <span className="gender-label">
            {formData.gender === 'male' ? 'Male' : 'Female'}
          </span>
        </div>

        {/* City Dropdown */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select id="city" name="city" onChange={handleChange} required style={{width: 200, display: 'block'}}>
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
          <select id="country" name="country" value={formData.country} onChange={handleChange} required style={{width: 200, display: 'block'}}>
            <option value="" disabled>Select a country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
          </select>
        </div>


      <button type="submit" className="submit-btn">Submit</button>
      <button onClick={clearLog} className="submit-btn">Clear Log</button>
      </form>
    </div>
  );
};

export default UserForm;
