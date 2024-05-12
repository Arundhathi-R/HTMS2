import React from 'react';
import './condetails.css';

function App() {
  return (
    <div className="container">
      <div className="hospital-info">
        <h1 style={{ color: 'black' }}>Harmony Health Hospital</h1>
        <p style={{ color: 'black' }}>Address: Harmony Health Hospital<br />
          XYZ Street, 696201<br />
          Rowl District
        </p>
        <p style={{ color: 'black' }}>Phone no: 8291010920</p>
        <p style={{ color: 'black' }}>Email: harmonyhealth@gmail.com</p>
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: 'rgb(10,174,185)', color: 'white' }}>Ambulance Contact (8544624120)</button>
        <button style={{ backgroundColor: 'rgb(10,174,185)', color: 'white' }}>Queries (7752486614)</button>
      </div>
    </div>
  );
}
export default App;