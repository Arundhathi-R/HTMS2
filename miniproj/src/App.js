import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlankWhitepage from './Homepage/HomePage';
import AppointmentHistory from './ApptHistory/apptHistory';
import Doctor from './DoctorPortal/Doctor';

// Define the App component
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BlankWhitepage/>} />
        <Route path="/ApptHistory/apptHistory" element={<AppointmentHistory/>} />
        <Route path="/DoctorPortal/Doctor" element={<Doctor/>} />
      </Routes>
    </Router>
  );
}

// Render the App component into the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Export the App component
export default App;
