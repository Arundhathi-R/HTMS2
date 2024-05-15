import React from 'react';
import {useNavigate} from 'react-router-dom';
import './confirm.css'; // Import CSS file for styling

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handlebackButtonClick = () => {
    navigate('/avslots');
  };
  return (
    <div className="confirmation-page-container">
     <button className="backButton" onClick={handlebackButtonClick}> Back</button>

      <h1 className="page-title">APPOINTMENT DETAILS</h1>
      <div className="appointment-details">
      <p><span className="detail-label">Name of doctor:</span> Dr. Analise K</p>
        <p><span className="detail-label">Department:</span> Gynecology</p>
        <p><span className="detail-label">Date:</span> 2024-05-16</p>
        <p><span className="detail-label">Time slot:</span> 10:30 T3</p>
      </div>
      <div className="confirmation-message">
        <div className="confirmation-box">
          <p className="confirmation-text">Your slot has been booked!</p>
        </div>
        <p className="confirmation-info">(Confirmation will be provided only after payment has been made via offline methods)</p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
