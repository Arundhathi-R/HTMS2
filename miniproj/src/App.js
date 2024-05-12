import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/login';
import PatientPortal from './patient portal/patient';
import ConfirmationPage from './appmnt confirm/confirm';
import DoctorSlotEditor from './edit slots/editslot';
import Signup from './signup/signup';
import LiveTokenDisplay from './livetoken/livetoken';
import Viewdetails from './viewappointment/view';
import Appntbook from './appntbook/appntbook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/patient portal/patient" element={<PatientPortal />} />
        <Route path="/appmnt confirm/confirm" element={<ConfirmationPage />} />
        <Route path="/edit slots/editslot" element={<DoctorSlotEditor />} />
        <Route exact path="/signup/signup" element={<Signup/>} />
        <Route path="/appntbook/appntbook" element={<Appntbook/>} />
        <Route path="/livetoken/livetoken" element={<LiveTokenDisplay/>}/>
        <Route path="/viewappointment/view" element={<Viewdetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
