import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import cross from './assets/hospital cross.png';
import doctor from './assets/dr homepage.jpeg'

function BlankWhitePage() {
    const navigate = useNavigate();

    const handlepatientButtonClick = () => {
      navigate('/login');
    };
    const handleAdminButtonClick = () => {
        navigate('/logindoctor');
      };
      const handleaboutusClick = () => {
        navigate('/aboutus');
      };
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
          <button className="admin-button"onClick={handleAdminButtonClick}>Admin</button>
        </div>
        <div>
          <button className="patient-button"onClick={handlepatientButtonClick}>Patient</button>
        </div>
        <div className="about_us">
            <a href="/aboutus" onClick={handleaboutusClick}>About Us</a>
          </div>
      </div>
    </div>
  );
}

export default BlankWhitePage;
