import React, { useEffect, useState } from 'react';
import './view.css';

const Viewdetails = () => {
  const [selectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments(selectedDate);
  }, [selectedDate]);

  const fetchAppointments = async (date) => {
    const appointmentsData = [
      { id: 1, patientName: 'Aria', tokenNumber: 'T1', status: ' completed' },
      { id: 2, patientName: 'Loid F', tokenNumber: 'T2', status: 'completed' },
      { id: 3, patientName: 'Jake Peralta', tokenNumber: 'T3', status: 'live' },
      { id: 4, patientName: 'Sakura', tokenNumber: 'T4', status: 'not completed' },
      { id: 5, patientName: 'Zeha', tokenNumber: 'T5', status: 'not completed' },
    ];
    setAppointments(appointmentsData);
  };

  const handleStatusChange = (id, status) => {
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === id) {
        return { ...appointment, status };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <div className="App">
      <header>
        <BackButton />
        <h1>APPOINTMENT DETAILS</h1>
        <DateDisplay selectedDate={selectedDate} />
      </header>
      <AppointmentTable appointments={appointments} onStatusChange={handleStatusChange} />
    </div>
  );
};

const BackButton = () => {
  const handleClick = () => {
    console.log('Back button clicked');
  };

  return (
    <button className="back-button" onClick={handleClick}>
      {'←back'}
    </button>
  );
};

const DateDisplay = ({ selectedDate }) => {
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <div className="date-display">{formattedDate}</div>;
};

const AppointmentTable = ({ appointments, onStatusChange }) => {
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
        {appointments.map(appointment => (
          <tr key={appointment.id}>
            <td>{appointment.patientName}</td>
            <td>{appointment.tokenNumber}</td>
            <td>
              <StatusDropdown
                appointmentId={appointment.id}
                currentStatus={appointment.status}
                onStatusChange={onStatusChange}
              />
            </td>
          </tr>
        ))}
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
