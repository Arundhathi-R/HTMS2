import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlankWhitepage from './Homepage/HomePage';
import AppointmentHistory from './ApptHistory/apptHistory';
import Doctor from './DoctorPortal/Doctor';
import Login from './login/login';
import PatientPortal from './patient portal/patient';
import ConfirmationPage from './appmnt confirm/confirm';
import DoctorSlotEditor from './edit slots/editslot';
import Signup from './signup/signup';
import LiveTokenDisplay from './livetoken/livetoken';
import Viewdetails from './viewappointment/view';
import Appntbook from './appntbook/appntbook';


// Define the App component
function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<BlankWhitepage/>} />
        <Route path="/ApptHistory/apptHistory" element={<AppointmentHistory/>} />
        <Route path="/DoctorPortal/Doctor" element={<Doctor/>} />

        <Route exact path="/login" element={<Login />} />
        <Route path="/patient portal/patient" element={<PatientPortal />} />
        <Route path="/appmnt confirm/confirm" element={<ConfirmationPage />} />
        <Route path="/edit slots/editslot" element={<DoctorSlotEditor />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route path="/appntbook/appntbook" element={<Appntbook/>} />
        <Route path="/livetoken/livetoken" element={<LiveTokenDisplay/>}/>
        <Route path="/viewappointment/view" element={<Viewdetails/>}/>

      </Routes>
    </Router>
  );
}

// Render the App component into the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Export the App component
export default App;
