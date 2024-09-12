import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Order = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const [errors, setErrors] = useState({});

  // Retrieve state using useLocation
  const location = useLocation();
  const { price } = location.state || { price: 0 }; // Default to 0 if not available

  const onUpdateField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.address) {
      newErrors.address = "Address is required";
    }

    if (!form.city) {
      newErrors.city = "City is required";
    }

    const postalCodePattern = /^[0-9]{5}$/; // Assuming a 5-digit postal code
    if (!form.postalCode || !postalCodePattern.test(form.postalCode)) {
      newErrors.postalCode = "Please enter a valid 5-digit postal code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order Submitted Successfully", form);
      // Handle form submission logic here
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmitForm}>
        <div className="formGroup">
          <label className="formLabel">Name</label>
          <input
            className={`formField ${errors.name ? "formFieldError" : ""}`}
            type="text"
            name="name"
            value={form.name}
            onChange={onUpdateField}
          />
          {errors.name && (
            <span className="formFieldErrorMessage">{errors.name}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Address</label>
          <input
            className={`formField ${errors.address ? "formFieldError" : ""}`}
            type="text"
            name="address"
            value={form.address}
            onChange={onUpdateField}
          />
          {errors.address && (
            <span className="formFieldErrorMessage">{errors.address}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">City</label>
          <input
            className={`formField ${errors.city ? "formFieldError" : ""}`}
            type="text"
            name="city"
            value={form.city}
            onChange={onUpdateField}
          />
          {errors.city && (
            <span className="formFieldErrorMessage">{errors.city}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Postal Code</label>
          <input
            className={`formField ${errors.postalCode ? "formFieldError" : ""}`}
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={onUpdateField}
          />
          {errors.postalCode && (
            <span className="formFieldErrorMessage">{errors.postalCode}</span>
          )}
        </div>

        <div className="formGroup">
          <label className="formLabel">Payment Method</label>
          <select
            className="formField"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={onUpdateField}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="cashOnDelivery">Cash On Delivery</option>
          </select>
        </div>

        <div className="formGroup">
          <label className="formLabel">Total Price</label>
          <div className="formField">₹{price}</div>
        </div>

        <div className="formActions">
          <button className="formSubmitBtn" type="submit">
            <Link to='/'>Place Order</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
