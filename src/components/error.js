import React from "react";

function NotFound() {
const app = {
  height: "100vh",
  margin: 0,
  padding: 0,
  backgroundColor: "#1b2b44",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
};

const container = {
  textAlign: "center",
  backgroundColor: "#dee9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "750px",
  width: "80vw",
};

const error = {
  fontSize: "clamp(1rem, 5vw, 2rem)",
  color: "#1b2b44",
  fontWeight: "bold",
  padding: "20px",
};

const p = {
  fontSize: "clamp(.5rem, 3vw, 1.2rem)",
  fontWeight: "500",
  marginBottom: "10px",
  color: "#333",
};

const title = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  color: "#fff",
  width: "100%",
  textAlign: "center",
  margin: "20px 0",
  fontWeight: "bold",
};

const span = {
  color: "#5b92e5",
};

const button = {
  display: "inline-block",
  backgroundColor: "#5b92e5",
  padding: "7px 20px",
  borderRadius: "5px",
  textAlign: "center",
  cursor: "pointer",
  margin: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
};

const bird = {
  height: "20vh",
};

return (
  <div style={app}>
    <link rel="icon" href="/favicon.ico" />
    <h1 className="title" style={title}>
      BlueBird <span style={span}>Teaching</span>
    </h1>
    <div className="container" style={container}>
      <h1 className="error" style={error}>
        404 - Page Not Found
      </h1>
      <p style={p}>
        Oops! Looks like we flew off course and couldn't find the page you're
        looking for.
      </p>
      <p style={p}>Please check the URL and try again.</p>
      <div className="button-container">
        <a href="/" className="button-text" style={button}>
          Back to the Nest!
        </a>
      </div>
    </div>
    <img
      src="https://i.ibb.co/ZVmTwmJ/image-2023-06-20-174043623.png"
      className="bird"
      alt="Bird"
      style={bird}
    />
    <a
      href="https://www.flaticon.com/free-stickers/parakeet"
      title="parakeet stickers"
      style={{
        fontSize: "clamp(.2rem, 3vw, 1rem)",
        textDecoration: "none",
        position: "fixed",
        bottom: "10px",
        color: "rgb(47, 133, 255)",
      }}
    >
      Parakeet stickers created by SoulGIE - Flaticon
    </a>
  </div>
);
}

export default NotFound;
