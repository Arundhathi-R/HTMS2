import React, { useState, useEffect } from 'react';
import './avslots.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Avslots() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDateParam = queryParams.get('date');
  const [selectedDate, setSelectedDate] = useState(selectedDateParam ? new Date(selectedDateParam) : null);

  useEffect(() => {
    if (!selectedDate) {
      navigate('/appntbook');
    }
  }, [navigate, selectedDate]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handlebooknowButtonClick = () => {
    navigate('/confirm');
  };

  return (
    <div className="container">
      <div className="title">Available Slots</div>
      <div className="timeSlotsWrapper">
        <div className={`timeSlot ${selectedSlot === '10:00' ? 'selected' : ''}`} onClick={() => handleSlotClick('10:00')}>
          <div className="time">10:00 T1</div>
        </div>
        <div className={`timeSlot ${selectedSlot === '10:30' ? 'selected' : ''}`} onClick={() => handleSlotClick('10:30')}>
          <div className="time">10:30 T3</div>
        </div>
        <div className={`timeSlot ${selectedSlot === '12:30' ? 'selected' : ''}`} onClick={() => handleSlotClick('12:30')}
        >
          <div className="time">12:30 T6</div>
        </div>
        <div className={`timeSlot ${selectedSlot === '14:20' ? 'selected' : ''}`} onClick={() => handleSlotClick('14:20')}
        >
          <div className="time">14:20 T8</div>
        </div>
        <div className={`timeSlot ${selectedSlot === '15:00' ? 'selected' : ''}`} onClick={() => handleSlotClick('15:00')}
        >
          <div className="time">15:00 T10</div>
        </div>
        <div className={`timeSlot ${selectedSlot === '15:30' ? 'selected' : ''}`} onClick={() => handleSlotClick('15:30')}
        >
          <div className="time">15:30 T11</div>
        </div>
        {/* to add similar divs for other time slots - will later integrate with database*/}
      </div>
      <div className="bookNow" onClick={handlebooknowButtonClick}>Book Now</div>
    </div>
  );
}

export default Avslots;