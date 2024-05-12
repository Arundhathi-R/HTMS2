import React from 'react';
//import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import './apptHistory.css';

function AppointmentHistory() {
  return (
    <div className="container">
        <button className="backButton">{" Back"}</button>
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

export default AppointmentHistory;