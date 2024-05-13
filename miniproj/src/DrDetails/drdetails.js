import React from 'react';
import './drdetails.css';
import doctorImage from './assets/dr 2 analise k.jpeg';

function Drdetails() {
  return (
    <div className="detailsContainer">
      <h2>DOCTOR DETAILS</h2>
      <div className="imageContainer">
        <img src={doctorImage} alt=" " className="doctorImage" />
      </div>
      <div className="detailRow">
        <span className="label">Name:</span>
        <span className="info">Dr. Analise K</span>
      </div>
      <div className="detailRow">
        <span className="label">Department:</span>
        <span className="info">Gynecology</span>
      </div>
      <div className="detailRow">
        <span className="label">Contact No:</span>
        <span className="info">5689521619</span>
      </div>
      <div className="detailRow">
        <span className="label">Email:</span>
        <span className="info">dranalise@gmail.com</span>
      </div>
      
      <div className="buttonRow">
        <button className="bookAppointmentButton" style={{ backgroundColor: 'rgb(10, 174, 185)' }}>Book an Appointment</button>
      </div>
      <div className="buttonRow">
        <button className="tokenStatusButton" style={{ backgroundColor: 'rgb(10, 174, 185)' }}>Token Status</button>
      </div>
    </div>
  );
}

export default Drdetails;