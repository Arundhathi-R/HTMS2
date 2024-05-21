/* import React, { useState, useEffect } from 'react';
import './drdetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

function Drdetails() {
  const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        // to fetch the doctor details from Firestore based on the doctor ID
        const doctorDoc = await getDoc(doc(db, 'Doctors', id));
        if (doctorDoc.exists()) {
          setDoctorDetails(doctorDoc.data());
        } else {
          console.log('Doctor not found');
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        //show error messaged
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
<<<<<<< HEAD
  </div>)*/ }
=======
  </div>) */
      /* <div className="detailRow">
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

export default Drdetails; */

/* import React, { useState, useEffect } from 'react';
import './drdetails.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../config/firebase';

function Drdetails() {
  //const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor } = location.state || {};

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        // to fetch the doctor details from Firestore based on the doctor ID
        const doctorDoc = await getDoc(doc(db, 'Doctors', doctor.id));
        if (doctorDoc.exists()) {
          setDoctorDetails(doctorDoc.data());
        } else {
          console.log('Doctor not found');
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        //show error messaged
      }
    };

    fetchDoctorDetails();
  }, [doctor, doctorDetails]);

  const handleBookingButtonClick = () => {
    navigate('/appntbook', { state: { doctor: doctorDetails } });
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
  </div>)
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

export default Drdetails; */

import React, { useState, useEffect } from 'react';
import './drdetails.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

function Drdetails() {
  const location = useLocation();
  const { id } = useParams();
  const { doctor } = location.state || {};
  const [doctorDetails, setDoctorDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        // to fetch the doctor details from Firestore based on the doctor ID
        const doctorDoc = await getDoc(doc(db, 'Doctors',id));
        if (doctorDoc.exists()) {
          setDoctorDetails(doctorDoc.data());
        } else {
          console.log('Doctor not found');
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        //show error messaged
      }
    };

    fetchDoctorDetails();
  }, [id, doctor, doctorDetails]);

  const handleBookingButtonClick = () => {
    navigate('/appntbook',{ state: { doctor: doctorDetails } });
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