import React, { useState } from 'react';
import './patient.css';
import dr1 from './assets/dr 1 sergio.jpg';
import dr2 from './assets/dr 2 analise k.jpeg';
import dr3 from './assets/dr 3 joy tuck.jpg';
import dr4 from './assets/dr 4 arya dev.jpg';
import dr5 from './assets/dr 5 ahn jeong.jpg';
import dr6 from './assets/dr 6 jun.jpg';
import dr7 from './assets/dr 7 chae.jpg';

const doctors = [
  { id: 1, name: 'Dr. Sergio Jim', department: 'Cardiology', image: dr1 },
  { id: 2, name: 'Dr. Analise K', department: 'Gynecology', image: dr2 },
  { id: 3, name: 'Dr. Joy Tuck', department: 'Pediatrics', image: dr3 },
  { id: 4, name: 'Dr. Arya Dev', department: 'ENT', image: dr4 },
  { id: 5, name: 'Dr. Ahn Jeong Won', department: 'Pediatrics', image: dr5 },
  { id: 6, name: 'Dr. Kim Junwan', department: 'Cardiology', image: dr6 },
  { id: 7, name: 'Dr. Chae Seonghwa', department: 'Neurology', image: dr7 },
];

const PatientPortal = () => {
  const [visibleDoctors, setVisibleDoctors] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleScroll = (scrollType) => {
    if (scrollType === 'left') {
      setVisibleDoctors((prev) => Math.max(prev - 1, 2));
    } else {
      setVisibleDoctors((prev) => Math.min(prev + 1, doctors.length));
    }
  };

  const handleDoctorClick = (doctor) => {
    // Open a new window with doctor details
    window.open(`/doctor/${doctor.id}`, '_blank');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="patient-portal-container">
      <h1 className="patient-title">PATIENT</h1>
      <div className="image-upload-container">
        <label htmlFor="image-upload" className="image-upload-label">
          {selectedImage ? (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="selected-image" />
          ) : (
            'Insert image here'
          )}
          <input
            type="file"
            id="image-upload"
            className="image-upload-input"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <br />
      <button className="appointment-history-button">Appointment History</button>
      <h2 className="choose-doctor-title">Choose your doctor:</h2>
      <div className="doctor-carousel">
        {doctors.slice(0, visibleDoctors).map((doctor) => (
          <a href=" " key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
            <div className="doctor-image-frame">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            </div>
            <div className="doctor-info">
              <p className="doctor-name">{doctor.name}</p>
              <p className="doctor-department">{doctor.department}</p>
            </div>
          </a>
        ))}
      </div>
      {visibleDoctors < doctors.length && (
        <div className="scroll-container">
          <button className="scroll-button scroll-left" onClick={() => handleScroll('left')}>&#60;</button>
          <button className="scroll-button scroll-right" onClick={() => handleScroll('right')}>&#62;</button>
        </div>
      )}
    </div>
  );
};

export default PatientPortal;
