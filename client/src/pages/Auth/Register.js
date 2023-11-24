import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    confirmPassword: "",
    favoriteSport: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

// Basic form validation
if (
  !formData.name ||
  !formData.email ||
  !formData.password ||
  !formData.phone ||
  !formData.gender ||
  !formData.dob ||
  !formData.bloodGroup ||
  !formData.confirmPassword ||
  !formData.favoriteSport
) {
  toast.error("Please fill in all required fields");
  return;
}
const isValidEmail = /^[a-zA-Z0-9.%+-][a-zA-Z0-9.%+-]{2,}@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(formData.email);
if (!isValidEmail) {
  toast.error("Invalid email format");
  return;
}
// Password validation (at least 6 characters, at least one uppercase, one lowercase, and one digit)
const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.password);
if (!isValidPassword) {
  toast.error("Password should be atleast 6 characters atleast one uppercase, one lowercase, and one digit");
  return;
}

// Phone number validation (exactly 10 digits)
const isValidPhone = /^\d{10}$/.test(formData.phone);
if (!isValidPhone) {
  toast.error("Phone should only contain 10 digits");
  return;
}

// Confirm password validation
if (formData.password !== formData.confirmPassword) {
  toast.error("Passwords do not match");
  return;
}


    try {
      const res = await axios.post("/api/v1/auth/register", formData);
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Hexabells_Doc_App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="form-row">
            <div className="form-group flex-half">
              <label htmlFor="name"> <i className="bi bi-person"></i>
              Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
                autoFocus
                minLength={3}
                pattern="[A-Za-z ]+"
              />
            </div>
            <div className="form-group flex-half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group flex-half">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Phone"
                required
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
              />
            </div>
            <div className="form-group flex-half">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

            </div>
          </div>
          <div className="form-row">
            <div className="form-group flex-half">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control"
                placeholder="Date of Birth"
                required
              />
            </div>
            <div className="form-group flex-half">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

            </div>
          </div>
          <div className="form-row">
            <div className="form-group flex-half">
              <label htmlFor="password">
              <i className="bi bi-shield-lock"></i>
              Password</label>
              <div className="password-input-container">
                <input
                  type={formData.showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={formData.showPassword}
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="showPassword">Show Password</label>
              </div>
              <small className="text-muted">
                Password must contains at least 6 characters and include at least one uppercase letter, one lowercase letter, and one digit.
              </small>
            </div>
            <div className="form-group flex-half">
              <label htmlFor="confirmPassword">
              <i className="bi bi-shield-lock"></i>
              Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="favoriteSport">Favorite Sport</label>
            <input
              type="text"
              name="favoriteSport"
              value={formData.favoriteSport}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Favorite Sport"
              required
            />
          </div>
          <div className="form-group center">

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;