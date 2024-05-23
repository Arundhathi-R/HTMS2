

import React, { useState, useEffect } from 'react';
import './avslots.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Avslots() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, doctor } = location.state || {};
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    if (!date || !doctor) {
      navigate('/appntbook');
    }
  }, [date, doctor, navigate]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookNowButtonClick = () => {
    navigate('/confirm', { state: { date, slot: selectedSlot, doctor } });
  };

  if (!date || !doctor) {
    return null;
  }

  return (
    <div className="container">
      <button className="backButton" onClick={() => navigate(-1)}>Back</button>
      <h1 className="title">Available Slots</h1>
      <div className="timeSlotsWrapper">
        {['10:00 T1', '10:30 T2', '12:30 T3', '14:20 T4', '15:00 T5', '15:30 T6'].map((slot) => (
          <div
            key={slot}
            className={`timeSlot ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => handleSlotClick(slot)}
          >
            <div className="time">{slot}</div>
          </div>
        ))}
      </div>
      <button className="bookNow" onClick={handleBookNowButtonClick}>Book Now</button>
    </div>
  );
}

export default Avslots;
