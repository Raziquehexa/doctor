import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/images/privacy1.jpg)",
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
    <Layout title={"Privacy Policy-Hexabells Doc App"}>
      <div style={backgroundImageStyle}>
        <div className="container" style={textContainerStyle}>

          <h4>Privacy Policy</h4>
          <p className="text-justify mt-2">
            Hexabells Hospitals are required by law to maintain the privacy of
            your medical information, to provide you with this written Notice of
            Privacy Rights and Practices, and to abide by the terms of the
            Notice currently in effect. This policy shall be applicable to the
            information collected or displayed on our website.
            </p>
          <h5>Data collected</h5>
          <p lassName="text-justify mt-2">
            We collect and store anonymous data from every visitor of the
            Website/application to monitor traffic and fix bugs on our server.
            For example, we collect information like web requests, the data sent
            in response to such requests, the Internet Protocol address, the
            browser type, the browser language, and a timestamp for the request.
           
          </p>
          <h5>Use of Data</h5>
          <p lassName="text-justify mt-2">
            We only use your personal information to provide you Hexabells
            Hospitals services or to communicate with you about the services or
            the Website.With respect to any information you may choose to upload
            to Hexabells Hospitals.
          </p>
          <h5>Other Websites</h5>
          <p lassName="text-justify mt-2">
            We do not extend the security and privacy policy to any other
            websites except for this website. We do not make any warranty or
            give any security to the personal information disclosed by you.
          </p>
          <h5>Law and Jurisdiction</h5>
          <p lassName="text-justify mt-2">
            The information provided under this website and the terms and
            conditions therein are governed by and to be interpreted in
            accordance with Laws of India. Any dispute arising out of the use of
            this website whether in contract or tort or otherwise, shall be
            submitted to the jurisdiction of the courts in Mumbai, India for its
            resolution.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
