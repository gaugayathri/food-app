import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully", form);
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmitForm}>
        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input
            className={`formField ${errors.email ? "formFieldError" : ""}`}
            type="email"
            aria-label="Email field"
            name="email"
            value={form.email}
            onChange={onUpdateField}
          />
          {errors.email && <span className="formFieldErrorMessage">{errors.email}</span>}
        </div>

        <div className="formGroup">
          <label className="formLabel">Password</label>
          <input
            className={`formField ${errors.password ? "formFieldError" : ""}`}
            type="password"
            aria-label="Password field"
            name="password"
            value={form.password}
            onChange={onUpdateField}
          />
          {errors.password && <span className="formFieldErrorMessage">{errors.password}</span>}
        </div>

        <div className="formGroup">
          <label className="formLabel">Confirm Password</label>
          <input
            className={`formField ${errors.confirmPassword ? "formFieldError" : ""}`}
            type="password"
            aria-label="Confirm password field"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onUpdateField}
          />
          {errors.confirmPassword && (
            <span className="formFieldErrorMessage">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="formActions">
          <button className="formSubmitBtn" type="submit">
            <Link to='/'>Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
