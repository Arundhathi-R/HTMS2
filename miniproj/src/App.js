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
import Forgotpassword from './ForgotPassword/forgotpassword';
import  Drdetails from './DrDetails/drdetails';
import Condetails from './ConDetails/condetails';
import  Avslots from './AvSlots/avslots';
import Logind from './logindoctor/logindoctor'



// Define the App component
function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<BlankWhitepage/>} />
        <Route path="/apptHistory" element={<AppointmentHistory/>} />
        <Route path="/Doctor" element={<Doctor/>} />

        <Route  path="/login" element={<Login />} />
        <Route path="/patient" element={<PatientPortal />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/editslot" element={<DoctorSlotEditor />} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/appntbook" element={<Appntbook/>} />
        <Route path="/livetoken" element={<LiveTokenDisplay/>}/>
        <Route path="/view" element={<Viewdetails/>}/>
       
        <Route path="/doctor/:id" element={<Drdetails />} />
        <Route  path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/DrDetails/drdetails" element={< Drdetails />} />
        <Route path="/condetails" element={< Condetails/>} />
        <Route path="/AvSlots/avslots" element={< Avslots />} />
        <Route path="/logindoctor" element={< Logind/>} />

      </Routes>
    </Router>
  );
}

// Render the App component into the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Export the App component
export default App;
