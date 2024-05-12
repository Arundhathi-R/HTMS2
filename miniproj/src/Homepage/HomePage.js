import React from 'react';
import './HomePage.css';
import cross from './assets/hospital cross.png';
import doctor from './assets/dr homepage.jpeg'

function BlankWhitePage() {
  return (
    <div>
      <div className="header">
        <img src={cross} alt="Logo" className="logo" />
        <div className="hospital-name">Harmony Health Hospital</div>
      </div>
      <img src={doctor} alt="doctor" className="dr"/>
      <div className="tagline">Nurturing Health, Restoring Lives</div>
      <div className="buttons">
        <div>
          <button className="admin-button">Admin</button>
        </div>
        <div>
          <button className="patient-button">Patient</button>
        </div>
      </div>
    </div>
  );
}

export default BlankWhitePage;
