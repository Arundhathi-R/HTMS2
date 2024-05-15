

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Import Firestore configuration
//import { collection, onSnapshot } from 'firebase/firestore';
import { collection, onSnapshot, getDocs, doc, updateDoc } from 'firebase/firestore';

//import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import './view.css';
//import { collection, onSnapshot } from 'firebase/firestore';


const Viewdetails = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "TokenUpdate")); 
        const appointmentsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched Appointments:', appointmentsArray); 
        setAppointments(appointmentsArray);
       console.log(appointments)
        const unsubscribe = onSnapshot(collection(db, "TokenUpdate"), snapshot => {
          const updatedAppointmentsArray = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log('Live Appointments Update:', updatedAppointmentsArray); // Debug logging
          setAppointments(updatedAppointmentsArray);
        });
  
     
        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
  
    fetchAppointments();
  }, []);

  console.log(appointments)
  const handleStatusChange = async (id, status) => {
    console.log(id)
    console.log(status)
    try {
      const appointmentRef = doc(db, "TokenUpdate", id); // Change collection name here
      await updateDoc(appointmentRef, { status });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handlebackButtonClick = () => {
    navigate('/Doctor');
  };

  return (
    <div className="App">
      <header>
        <button className="backButton" onClick={handlebackButtonClick}>Back</button>
        <h1>APPOINTMENT DETAILS</h1>
      </header>
      <AppointmentTable appointments={appointments} onStatusChange={handleStatusChange} />
    </div>
  );
};

const AppointmentTable = ({ appointments, onStatusChange }) => {
  //const [islive,setislive] = useState(false)
  console.log("in here")
  console.log(appointments)

  const live = appointments.forEach((Element)=>{
    if(appointments.status==="live")
      return true
  })

  //setislive(live)
  console.log(live)


  return (
    <table className="appointment-table">
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Token Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.length === 0 ? (
          <tr>
            <td colSpan="3">No appointments available</td>
          </tr>
        ) : (
          appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.PatientName}</td>
              <td>{appointment.TokenNo}</td>
              <td>
                <StatusDropdown
                  appointmentId={appointment.id}
                  currentStatus={appointment.status}
                  onStatusChange={onStatusChange}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

const StatusDropdown = ({ appointmentId, currentStatus, onStatusChange,islive }) => {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onStatusChange(appointmentId, newStatus);
  };

  return (
    <select value={currentStatus} onChange={handleStatusChange}>
      <option value="completed">Completed</option>
      <option value="not completed">Not Completed</option>
      <option value="live">Live</option>
    </select>
  );
};

export default Viewdetails;
