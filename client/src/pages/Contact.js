import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/images/contactus.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (0.5) as needed
  };

  const textContainerStyle = {
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px", // Adjust as needed
    position: "relative",
    zIndex: 1,
    
  };

  return (
    <Layout title={"Contact us-Hexabells Doc App"}>
      <div style={backgroundImageStyle}>
        <div className="container" style={textContainerStyle}>
          <h5>CONTACT US</h5>
            <h6>Simple, Streamlined, and Affordable</h6>
            <p className="text-justify mt-2">
            Bridging the gap between patients and healthcare professionals

            </p>
          <p className="text-justify mt-2">
          Digital healthcare solution that can help you optimize your practice, facilitate continuity of care, and engage your patients so that you can focus on delivering better patient experiences

            any query and info about getting Appointments feel free to call
            anytime we 24X7 vaialible
          </p>

          <p className="text-justify mt-3">
            <BiMailSend /> : www.help@docappointments.com
          </p>

          <p className="text-justify mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>

          <p className="text-justify mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
