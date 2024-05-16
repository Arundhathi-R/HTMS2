



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Import Firestore configuration
import { collection, onSnapshot, getDocs, doc, updateDoc } from 'firebase/firestore';
import './view.css';

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
        const unsubscribe = onSnapshot(collection(db, "TokenUpdate"), snapshot => {
          const updatedAppointmentsArray = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log('Live Appointments Update:', updatedAppointmentsArray);
          setAppointments(updatedAppointmentsArray);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const liveAppointment = appointments.find(app => app.status === "live");

      if (status === "live" && liveAppointment && liveAppointment.id !== id) {
        alert("Another appointment is already live. Please complete it before making another appointment live.");
        return;
      }

      const appointmentRef = doc(db, "TokenUpdate", id);
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
  console.log("in here")
  console.log(appointments)

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

const StatusDropdown = ({ appointmentId, currentStatus, onStatusChange }) => {
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

