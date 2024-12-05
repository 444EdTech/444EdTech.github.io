import React from "react";

const Payment = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f0f8ff",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
    textAlign: "center",
  };

  const upiLink = "upi://pay?pa=abc@abc&pn=RecipientName&am=44&cu=INR";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div style={containerStyle}>
      {isMobile ? (
        <a href={upiLink} style={buttonStyle}>
          Pay Now
        </a>
      ) : (
        <p>Open this page on a mobile device to make a UPI payment.</p>
      )}
    </div>
  );
};

export default Payment;
