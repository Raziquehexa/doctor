import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/images/about-us.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textContainerStyle = {
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px", // Adjust as needed
  };

  return (
    <Layout title={"About us-Hexabells Doc App"}>
      <div style={backgroundImageStyle}>
        <div className="container" style={textContainerStyle}>
          <h5>A Cloud-based Healthcare Platform</h5>
          <p className="text-justify mt-2">
            Hexabells_Doc_App is developed to digitalize and simplify the task
            of integrating everything related to Healthcare, including medical,
            clinical & pharmaceutical procurement and maintenance of records. It
            is founded by the Sweden based company HexabellsAnalytica AB, a
            Healthcare Information Technology company committed to providing
            innovative solutions with knowledge-enabled tools that empower
            healthcare professionals to manage, track and automate their
            operational, administrative and financial processes. SmartCare is
            the business application to run every aspect of a clinic.
          </p>
          <h5> vision</h5>
           <p className="text-justify mt-2">
           Our vision is to provide the best technologies to healthcare clinics and help society to improve their quality of life. We trust that it can be achieved by offering innovative, cost-effective and user-friendly products and services. We believe that our products will build mutually beneficial relationships between healthcare professionals and the patients.
           </p>
           <h5>Mission</h5>
           <p className="text-justify mt-2">Our mission is to grow our business by using innovation, creativity and the best skills to improve patient health by constantly enhancing the quality of our products and services. We thrive for operational excellence by using our innovative products and being effective in everything we do.</p>

           <h5>Philosophy</h5>
           <p className="text-justify mt-2">
           We believe in delivering effective and accurate healthcare with a commitment to offering innovative and creative products and customer service to meet the requirements of each of our customer’s individual needs.
           </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
