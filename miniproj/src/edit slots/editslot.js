import React, { useState } from 'react';
import './editslot.css'; // Import CSS file for styling

const DoctorSlotEditor = () => {
  const [selectedAddSlots, setSelectedAddSlots] = useState([]);
  const [selectedDeleteSlots, setSelectedDeleteSlots] = useState([]);

  const handleAddSlotClick = (slot) => {
    setSelectedAddSlots((prevSelected) => {
      if (prevSelected.includes(slot)) {
        return prevSelected.filter((selectedSlot) => selectedSlot !== slot);
      } else {
        return [...prevSelected, slot];
      }
    });
  };

  const handleDeleteSlotClick = (slot) => {
    setSelectedDeleteSlots((prevSelected) => {
      if (prevSelected.includes(slot)) {
        return prevSelected.filter((selectedSlot) => selectedSlot !== slot);
      } else {
        return [...prevSelected, slot];
      }
    });
  };

  const isAddSlotSelected = (slot) => selectedAddSlots.includes(slot);
  const isDeleteSlotSelected = (slot) => selectedDeleteSlots.includes(slot);

  return (
    <div className="doctor-slot-editor-container">
      <h2 className="section-title">ADD SLOTS</h2>
      <div className="add-slots-section">
        <div className="slot-list">
          <div className="slot-scroll-box">
            <div
              className={`slot ${isAddSlotSelected('10:15 - T2') ? 'selected' : ''}`}
              onClick={() => handleAddSlotClick('10:15 - T2')}
            >
              10:15 - T2
            </div>
            <div
              className={`slot ${isAddSlotSelected('11:00 - T4') ? 'selected' : ''}`}
              onClick={() => handleAddSlotClick('11:00 - T4')}
            >
              11:00 - T4
            </div>
            <div
              className={`slot ${isAddSlotSelected('11:30 - T5') ? 'selected' : ''}`}
              onClick={() => handleAddSlotClick('11:30 - T5')}
            >
              11:30 - T5
            </div>
            <div
              className={`slot ${isAddSlotSelected('14:15 - T9') ? 'selected' : ''}`}
              onClick={() => handleAddSlotClick('14:15 - T9')}
            >
              14:15 - T9
            </div>
            <div
              className={`slot ${isAddSlotSelected('16:30 - T13') ? 'selected' : ''}`}
              onClick={() => handleAddSlotClick('16:30 - T13')}
            >
              16:30 - T13
            </div>
            {/*We can dd other slots similarly*/}
          </div>
          <div className="arrow-container">
            <button className="scroll-button">&#8249;</button>
            <button className="scroll-button">&#8250;</button>
          </div>
        </div>
      </div>
      <button className="action-button">Add</button>
      <h2 className="section-title">DELETE SLOTS</h2>
      <div className="delete-slots-section">
        <div className="slot-list">
          <div className="slot-scroll-box">
            <div
              className={`slot ${isDeleteSlotSelected('10:00 - T1') ? 'selected' : ''}`}
              onClick={() => handleDeleteSlotClick('10:00 - T1')}
            >
              10:00 - T1
            </div>
            <div
              className={`slot ${isDeleteSlotSelected('10:30 - T3') ? 'selected' : ''}`}
              onClick={() => handleDeleteSlotClick('10:30 - T3')}
            >
              10:30 - T3
            </div>
            <div
              className={`slot ${isDeleteSlotSelected('12:30 - T7') ? 'selected' : ''}`}
              onClick={() => handleDeleteSlotClick('12:30 - T7')}
            >
              12:30 - T7
            </div>
            <div
              className={`slot ${isDeleteSlotSelected('15:00 - T11') ? 'selected' : ''}`}
              onClick={() => handleDeleteSlotClick('15:00 - T11')}
            >
              15:00 - T11
            </div>
            <div
              className={`slot ${isDeleteSlotSelected('15:15 - T12') ? 'selected' : ''}`}
              onClick={() => handleDeleteSlotClick('15:15 - T12')}
            >
              15:15 - T12
            </div>
            {/* Add other slots similarly */}
          </div>
          <div className="arrow-container">
            <button className="scroll-button">&#8249;</button>
            <button className="scroll-button">&#8250;</button>
          </div>
        </div>
      </div>
      <button className="action-button">Delete</button>
    </div>
  );
}

export default DoctorSlotEditor;