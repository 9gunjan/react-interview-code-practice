// Problem Statement:
// You need to create a React form component that allows users to enter input in text fields. The form should be controlled, meaning the input values are managed via React’s useState hook. Additionally, you need to implement form validation to ensure valid user input before submission.

import { useState } from "react";
import React from "react";
import "../Styles/SignUp.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "name") {
      errorMessage =
        value.length < 3 ? "Name must be at least 3 characters long" : "";
    } else if (name === "email") {
      errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Invalid email address";
    } else if (name === "password") {
      errorMessage =
        value.length < 6 ? "Password must be 6 characters long" : "";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Object.values(errors).some((error) => error) ||
      Object.values(formData).some((value) => !value)
    ) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log("form submitted", formData);
    alert("Form data submitted successfully");
    setFormData({ name: "", email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
  };

  return (
    <div className="form-container">
      <h2>Sign Up Form </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
