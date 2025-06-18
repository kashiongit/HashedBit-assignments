// Confirmation.jsx (Your updated code to read query params)
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/layout.css"; // import CSS

function Confirmation() {
  const location = useLocation();
  const state = location.state || {};
  const { bookingId, name, email, mobile } = state;


  return (
    <div className="center-layout">
      <div className="confirmation-container">
        <h3>congratulations! Booking Confirmed🎉</h3>
        <div className="booking-ticket">
         <p><strong>Booking ID:</strong> {bookingId}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mobile:</strong> {mobile}</p>

       </div>
      </div>
    </div>
  );
}

export default Confirmation;