import React, { useEffect, useState } from 'react';
import './confirm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, slot, doctor } = location.state || {};
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, 'Patients', user.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().Name);
          } else {
            console.error('User document does not exist');
          }
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  useEffect(() => {
    if (!date || !slot || !doctor) {
      navigate('/patient');
    }
  }, [date, slot, doctor, navigate]);

  const handleConfirmButtonClick = async () => {
    try {
      const user = auth.currentUser;
      console.log('Current User:', user); // Debugging log
      console.log('Doctor Details:', doctor);
      if (user && doctor && doctor.Username) {
        const appointmentId = `${user.uid}_${doctor.Username}_${date.toISOString()}_${slot}`;
        await setDoc(doc(db, 'Appointments', appointmentId), {
          AvlDate: date.toISOString(),
          AvlSlot: slot,
          email:user.email,
          DocUsername: doctor.Username,
          PatId: user.uid,
          PatName: userName
        });
        console.log('Appointment confirmed:', {
          AvlDate: date.toISOString(),
          AvlSlot: slot,
          DocUsername: doctor.Username,
          PatId: user.uid,
        });
        navigate('/patient');
      } else {
        console.error('Invalid data: user or doctor details are missing');
      }
    } catch (error) {
      console.error('Error confirming appointment:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching user data
  }

  if (!date || !slot || !doctor) {
    return null;
  }

  return (
    <div className="confirmation-container">
      <button className="backButton" onClick={() => navigate('/patient')}>Back</button>
      <h1 className="title">Appointment Confirmation</h1>
      <div className="confirmation-details">
        <p className="confirmation-detail">Doctor: {doctor.Name}</p>
        <p className="confirmation-detail">Department: {doctor.Dept}</p>
        <p className="confirmation-detail">Appointment Date: {date.toDateString()}</p>
        <p className="confirmation-detail">Slot: {slot}</p>
        <p className="confirmation-detail">Patient: {userName}</p>
      </div>
      <button className="confirm-button" onClick={handleConfirmButtonClick}>Confirm</button>
    </div>
  );
};

export default ConfirmationPage;
