import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './ForgotPassword/forgotpassword';
import App from './DrDetails/drdetails';
import App from './ConDetails/condetails';
import App from './AvSlots/avslots';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/DrDetails/drdetails" element={<App />} />
        <Route path="/ConDetails/condetails" element={<App />} />
        <Route path="/AvSlots/avslots" element={<App />} />
      </Routes>
    </Router>
  );
}

export default App;