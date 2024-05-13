import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './appntbook.css';

function Appntbook() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
    console.log('Selected date:', date);
  };

  return (
    <div className="appointment-booking-container">
      <div className="appointment-booking">
        <h1 className="title">Appointment Booking</h1>
        <p className="comment">Select an appointment date:</p>
        
        <div className="calendar">
      
        <Calendar
            onChange= {handleDateChange}
            value= {selectedDate}
            className="custom-calendar"
          />
        </div>
    
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}

export default Appntbook;