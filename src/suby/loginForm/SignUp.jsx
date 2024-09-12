import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    acceptedTerms: false,
  });
  const [errors, setErrors] = useState({});

  const onUpdateField = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [name]: fieldValue,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.username || form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phonePattern = /^\d+$/;
    if (!form.phoneNumber || !phonePattern.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.acceptedTerms) {
      newErrors.acceptedTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully", form);
      // Here you can handle form submission, such as sending data to a server
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmitForm}>
        <div className="formGroup">
          <label className="formLabel">Username</label>
          <input
            className={`formField ${errors.username ? "formFieldError" : ""}`}
            type="text"
            name="username"
            value={form.username}
            onChange={onUpdateField}
          />
          {errors.username && (
            <span className="formFieldErrorMessage">{errors.username}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            className={`formField ${errors.email ? "formFieldError" : ""}`}
            type="email"
            name="email"
            value={form.email}
            onChange={onUpdateField}
          />
          {errors.email && (
            <span className="formFieldErrorMessage">{errors.email}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Phone Number</label>
          <input
            className={`formField ${errors.phoneNumber ? "formFieldError" : ""}`}
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={onUpdateField}
          />
          {errors.phoneNumber && (
            <span className="formFieldErrorMessage">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Password</label>
          <input
            className={`formField ${errors.password ? "formFieldError" : ""}`}
            type="password"
            name="password"
            value={form.password}
            onChange={onUpdateField}
          />
          {errors.password && (
            <span className="formFieldErrorMessage">{errors.password}</span>
          )}
        </div>
        
        <div className="formGroup">
          <label>
            <input
              className={`formCheckbox ${errors.acceptedTerms ? "formFieldError" : ""}`}
              type="checkbox"
              name="acceptedTerms"
              checked={form.acceptedTerms}
              onChange={onUpdateField}
            />
            I accept the terms and conditions
          </label>
          {errors.acceptedTerms && (
            <span className="formFieldErrorMessage">{errors.acceptedTerms}</span>
          )}
        </div>

        <div className="formActions">
          <button className="formSubmitBtn" type="submit">
            <Link to='/'>Sign up</Link>
          </button>
        </div>
          <p> Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
