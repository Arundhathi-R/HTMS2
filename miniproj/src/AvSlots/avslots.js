import React, { useState } from 'react';
import './avslots.css';

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <div className="container">
      <div className="title">Available Slots</div>
      <div className="timeSlotsWrapper">
        <div
          className={`timeSlot ${selectedSlot === '10:00' ? 'selected' : ''}`}
          onClick={() => handleSlotClick('10:00')}
        >
          <div className="time">10:00</div>
        </div>
        <div
          className={`timeSlot ${selectedSlot === '10:30' ? 'selected' : ''}`}
          onClick={() => handleSlotClick('10:30')}
        >
          <div className="time">10:30</div>
        </div>
        {/* Add similar divs for other time slots */}
      </div>
      <div className="bookNow">Book Now</div>
    </div>
  );
}

export default App;
