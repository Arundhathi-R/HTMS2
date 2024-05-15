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
    <div className="appointment-booking-container">
      <div className="appointment-booking">
      <button className="backButton" onClick={handlebackButtonClick}>Back</button>
        <h1 className="title">Appointment Booking</h1>
        <p className="comment">Select an appointment date:</p>
        
        <div className="calendar">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="custom-calendar"
          />
        </div>
    
        <button className="contact-button" onClick={handlecontactButtonClick}>Contact Us</button>
      </div>
    </div>
  );
}

export default Appntbook;