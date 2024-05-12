import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import doctorImage from './assets/dr 4 arya dev.jpg'; 
import './Doctor.css';

function Doctor() {
  const [date, setDate] = useState(new Date());

  // Function to format date as "MM/DD/YYYY"
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


 


  return (
    <div className="container">
       <div className="title-container">
              <img src={doctorImage} alt="Doctor" className="doctor-image" />
      <h1 className="title">WELCOME BACK, DR. ARYA DEV!</h1>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
        className="custom-Calendar"
        />
      </div>
      <button className="date-button">{date.toLocaleDateString()}</button>
      <div className="button-container">
        <button className="action-button">View Appointment</button>
        <button className="action-button">Edit Slots</button>
      </div>
    </div>
  );
}

export default Doctor;
