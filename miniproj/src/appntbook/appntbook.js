import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import './appntbook.css';

function Appntbook() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlecontactButtonClick = () => {
    navigate('/condetails');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    navigate(`/avslots?date=${date.toISOString()}`); // Pass selected date as URL parameter
  };
  const handlebackButtonClick = () => {
    navigate('/drdetails');
  };

  return (
    <div className="appointment-booking-container3">
      <div className="appointment-booking3">
      <button className="backButton3" onClick={handlebackButtonClick}>Back</button>
        <h1 className="title3">Appointment Booking</h1>
        <p className="comment3">Select an appointment date:</p>
        
        <div className="calendar3">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar3"
          />
        </div>
    
        <button className="contact-button3" onClick={handlecontactButtonClick}>Contact Us</button>
      </div>
    </div>
  );
}

export default Appntbook;