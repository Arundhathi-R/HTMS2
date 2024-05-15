import React, { useState, useEffect } from 'react';
import './drdetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../config/firebase'; // Import Firestore db instance
import { doc, getDoc } from 'firebase/firestore';

function Drdetails() {
  const { id } = useParams(); // Get the doctor ID from URL params
  const [doctorDetails, setDoctorDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        // Fetch the doctor details from Firestore based on the doctor ID
        const doctorDoc = await getDoc(doc(db, 'Doctors', id));
        if (doctorDoc.exists()) {
          setDoctorDetails(doctorDoc.data());
        } else {
          console.log('Doctor not found');
          // Handle case where doctor with specified ID doesn't exist
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        // Handle error, show message to user, etc.
      }
    };

    fetchDoctorDetails();
  }, [id]);

  const handleBookingButtonClick = () => {
    navigate('/appntbook');
  };

  const handleTokenButtonClick = () => {
    navigate('/livetoken');
  };

  const handleBackButtonClick = () => {
    navigate('/patient');
  };

  return (
    <div className="detailsContainer">
      <button className="backButton" onClick={handleBackButtonClick}>Back</button>

      <h2>DOCTOR DETAILS</h2>
      {/* div className="imageContainer">
        <img src={doctorDetails?.image} alt=" " className="doctorImage" />
  </div>) */}
      <div className="detailRow">
        <span className="label">Name:</span>
        <span className="info">{doctorDetails?.Name}</span>
      </div>
      <div className="detailRow">
        <span className="label">Department:</span>
        <span className="info">{doctorDetails?.Dept}</span>
      </div>
      <div className="detailRow">
        <span className="label">Contact No:</span>
        <span className="info">{doctorDetails?.PhNo}</span>
      </div>
      <div className="detailRow">
        <span className="label">Email:</span>
        <span className="info">{doctorDetails?.email}</span>
      </div>

      <div className="buttonRow">
        <button className="bookAppointmentButton" onClick={handleBookingButtonClick} style={{ backgroundColor: 'rgb(10, 174, 185)' }}>Book an Appointment</button>
      </div>
      <div className="buttonRow">
        <button className="tokenStatusButton" onClick={handleTokenButtonClick} style={{ backgroundColor: 'rgb(10, 174, 185)' }}>Token Status</button>
      </div>
    </div>
  );
}

export default Drdetails;
