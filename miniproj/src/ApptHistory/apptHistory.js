/*import React from 'react';
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './apptHistory.css';

function AppointmentHistory() {
  const navigate = useNavigate();

  const handlebackButtonClick = () => {
    navigate('/patient');
  };
  return (
    <div className="container">
        <button className="backButton" onClick={handlebackButtonClick}> Back</button>
          <h1 className="heading">APPOINTMENT HISTORY:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Doctor name</th>
            <th>Date of appointment</th>
            <th>Token number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Analise K</td>
            <td>2022-04-23</td>
            <td>T4</td>
          </tr>
          <tr>
            <td>Dr. James Keat</td>
            <td>2022-07-02</td>
            <td>T5</td>
          </tr>
          <tr>
            <td>Dr. Analise K</td>
            <td>2023-01-03</td>
            <td>T7</td>
          </tr>
          <tr>
            <td>Dr. Analise K</td>
            <td>2023-07-14</td>
            <td>T1</td>
          </tr>
          <tr>
            <td>Dr. Arya Dev</td>
            <td>2024-01-12</td>
            <td>T3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentHistory;*/


/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db,auth } from '../config/firebase'; // Import your Firebase configuration
import { collection, query, where, getDocs } from 'firebase/firestore';
import './apptHistory.css';

function AppointmentHistory({ userId }) {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Query appointments based on the user's ID
        auth.onAuthStateChanged(async(user)=>{
          console.log(user.email)
          const appointmentsCollection = collection(db, 'Appointments');
        const appointmentsQuery = query(appointmentsCollection, where('email', '==', user.email));
        const appointmentsSnapshot = await getDocs(appointmentsQuery);
        const appointmentsData =  appointmentsSnapshot.docs.map(doc =>doc.data());
        
        setAppointments(appointmentsData);
        //console.log(appointments)
        appointments.map((data)=>{
          console.log(data)
        })
        //console.log(appointments)
        })
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [userId]); // Trigger fetchAppointments when userId changes

  const handleBackButtonClick = () => {
    navigate('/patient');
  };

  return (
    <div className="container">
      <button className="backButton" onClick={handleBackButtonClick}>Back</button>
      <h1 className="heading">APPOINTMENT HISTORY:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Doctor name</th>
            <th>Date of appointment</th>
            <th>Token number</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment,index) => (
         
            <tr key={index}>
              <td>{appointment.DocUsername}</td>
              <td>{appointment.AvlDate}</td>
             <td>{appointment.TokenNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentHistory;*/

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../config/firebase'; // Import your Firebase configuration
import { collection, query, where, getDocs } from 'firebase/firestore';
import './apptHistory.css';

function AppointmentHistory({ userId }) {
  const [appointments, setAppointments] = useState([]);
  //const [Token, setToken] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Query appointments based on the user's ID
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            console.log(user.email);
            const appointmentsCollection = collection(db, 'Appointments');
            const Tokencollection = collection(db, 'TokenUpdate');
            const appointmentsQuery = query(appointmentsCollection, where('email', '==', user.email));
            const TokenQuery = query(Tokencollection, where('email', '==', user.email));
            const appointmentsSnapshot = await getDocs(appointmentsQuery);
            const TokenSnapshot = await getDocs(TokenQuery);
            const appointmentsData = appointmentsSnapshot.docs.map(doc => doc.data());
            const tokenData = TokenSnapshot.docs.map(doc => doc.data());
            const combinedData = appointmentsData.map(appointment => {
              const tokenInfo = tokenData.find(token => token.email === appointment.email);
              return { ...appointment, TokenNo: tokenInfo ? tokenInfo.TokenNo : 'N/A' };
            });
            /*setAppointments(combinedData);
           // setToken(TokenData);
            console.log(combinedData); // For debugging
          }
        });
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };*/
const uniqueAppointments = [];
            const seenAppointments = new Set();
            
            combinedData.forEach(appointment => {
              const uniqueKey = `${appointment.DocUsername}-${formatDate(appointment.AvlDate)}`;
              if (!seenAppointments.has(uniqueKey)) {
                seenAppointments.add(uniqueKey);
                uniqueAppointments.push(appointment);
              }
            });

            setAppointments(uniqueAppointments);
            console.log(uniqueAppointments); // For debugging
          }
        });
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, [userId]); // Trigger fetchAppointments when userId changes

  const handleBackButtonClick = () => {
    navigate('/patient');
  };
  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
  };

  return (
    <div className="container">
      <button className="backButton" onClick={handleBackButtonClick}>Back</button>
      <h1 className="heading">APPOINTMENT HISTORY:</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Doctor name</th>
            <th>Date of appointment</th>
            <th>Token number</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.DocUsername}</td>
              <td>{formatDate(appointment.AvlDate)}</td> {/* Using formatDate here */}
              
              <td>{appointment.TokenNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentHistory;
