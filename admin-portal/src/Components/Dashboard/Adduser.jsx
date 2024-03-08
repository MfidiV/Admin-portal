import React, { useState } from "react";
import "./adduser.css";
import axios from "axios";



const AddUser = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Moved inside the component

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    idNumber: "", // Fixed typo here
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
    if (!formData.name || !formData.surname || !formData.email || !formData.age || !formData.idNumber) {
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
      setShowSuccessModal(true);
      
      // Optionally, reset the form fields after successful submission
      // Keep the selected age range after submission
      setFormData({
        name: "",
        surname: "",
        idNumber: "", // Reset idNumber field
        email: "",
        age: formData.age,
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
          <label htmlFor="idNumber" className="form-label">
            ID Number:
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
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
            <label htmlFor="age_under_18" className="radio-label">
              Under 18
            </label>
            <input
              type="radio"
              id="age_under_18"
              name="age"
              value="under_18"
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
              value="18_65"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="age_over_65" className="radio-label">
              Over 65
            </label>
            <input
              type="radio"
              id="age_over_65"
              name="age"
              value="over_65"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        {/* Code for handling images */}
        
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <span className="close" onClick={() => setShowSuccessModal(false)}>
              &times;
            </span>
            <p>User added successfully!</p>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default AddUser;
