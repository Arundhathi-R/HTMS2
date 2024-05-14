import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import doctorImage from './assets/dr 4 arya dev.jpg'; 
import './Doctor.css';
import { useNavigate } from 'react-router-dom';

function Doctor() {
  const [date, setDate] = useState(new Date());

  // Function to format date as "MM/DD/YYYY"
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
    
  };

  const navigate = useNavigate();
  
  const handleeditslotButtonClick = () => {
    navigate('/editslot');
  };
  const handleviewButtonClick = () => {
    navigate('/view');
  };
  const handlelogoutdButtonClick = () => {
    navigate('/logindoctor');
  };


  return (
    <div className="container1">
       <div className="title-container">
              <img src={doctorImage} alt="Doctor" className="doctor-image1" />
      <h1 className="title1">WELCOME BACK, DR. ARYA DEV!</h1>
      <button className="logout-d"onClick={handlelogoutdButtonClick}>Logout</button>
      </div>
      <div className="calendar-container1">
        <Calendar
          onChange={setDate}
          value={date}
        className="custom-Calendar1"
        />
      </div>
      <button className="date-button1">{date.toLocaleDateString()}</button>
      <div className="button-container1">
        <button className="action-button1"onClick={handleviewButtonClick}>View Appointment</button>
        <button className="action-button1" onClick={handleeditslotButtonClick}>Edit Slots</button>
      </div>
    </div>
  );
}

export default Doctor;
