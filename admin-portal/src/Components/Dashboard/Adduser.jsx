import React, { useState } from "react";
import "./adduser.css";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    age: 18, // Default age to 18
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.surname || !formData.email || !formData.age) {
      console.error("Error adding user: All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 201) {
        throw new Error("Failed to add user");
      }

      console.log("User added successfully");

      // Optionally, reset the form fields after successful submission
      setFormData({
        name: "",
        surname: "",
        email: "",
        age: 18, // Reset age to default
      });
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="input-text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname" className="form-label">
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
            className="input-text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="input-text"
          />
        </div>
        <div className="form-group">
          <div className="age-container">
            <p>Age:</p>
            <label htmlFor="age_18" className="radio-label">
              Under 18
            </label>
            <input
              type="radio"
              id="age_18"
              name="age"
              value="<18"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="age_18_65" className="radio-label">
              18-65
            </label>
            <input
              type="radio"
              id="age_18_65"
              name="age"
              
              value="18-65"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="age_65" className="radio-label">
              Over 65
            </label>
            <input
              type="radio"
              id="age_65"
              name="age"
              value=">65"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* <div className="form-group">
          <p>Image:</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="input-file"
          />
          <button
            type="button"
            className="button"
            onClick={handleTakeFromCamera}
          >
            Take from camera
          </button>
        </div> */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
