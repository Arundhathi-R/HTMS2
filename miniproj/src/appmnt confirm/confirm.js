import React from 'react';
import {useNavigate} from 'react-router-dom';
import './confirm.css'; // Import CSS file for styling

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handlebackButtonClick = () => {
    navigate('/avslots');
  };
  return (
    <div className="confirmation-page-container3">
     <button className="backButton2" onClick={handlebackButtonClick}> Back</button>

      <h1 className="page-title2">APPOINTMENT DETAILS</h1>
      <div className="appointment-details2">
        <p><span className="detail-label2">Name of doctor:</span> Dr. Analise K</p>
        <p><span className="detail-label2">Department:</span> Gynecology</p>
        <p><span className="detail-label2">Date:</span> 2024-05-16</p>
        <p><span className="detail-label2">Time slot:</span> 10:30 am T3</p>
	<p><span className="detail-label2">Patient Name:</span> Patient name</p>
      </div>
      <div className="confirmation-message2">
        <div className="confirmation-box2">
          <p className="confirmation-text2">Your slot has been booked!</p>
        </div>
        <p className="confirmation-info2">(Confirmation will be provided only after payment has been made via offline methods)</p>
      </div>
    </div>
  );
}

export default ConfirmationPage;