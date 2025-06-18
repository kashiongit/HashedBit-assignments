import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/layout.css"; // import CSS

function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
   
   
    
       navigate("/confirmation", {
        state: { ...formData, bookingId },
      });
    };

    return (
      <div className="form-div">
        <div className="center-layout">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Book Your Seat for {movie?.title}</h2>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            required
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
      </div>
    );
  }

  export default BookingForm;


