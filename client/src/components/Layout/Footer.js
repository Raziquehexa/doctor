import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333", // Dark background color
    // backgroundColor: "dark",
    color: "#fff", // White text color
    padding: "10px", // Add padding for better spacing
  };

  return (
    <div className="footer" style={footerStyle}>
      <h6 className="text-center">
        All Right Reserved &copy; Hexabells_Doc_App
      </h6>
      <p className="text-center mt-2">
        <Link to="/about" className="text-white">About Us</Link> |{" "}
        <Link to="/contact" className="text-white">Contact</Link> |{" "}
        <Link to="/policy" className="text-white">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
