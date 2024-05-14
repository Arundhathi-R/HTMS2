import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // for version 9 modular SDK
import 'firebase/compat/firestore'; // for version 9 modular SDK

import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Assuming this is the correct path to your firebase.js file

import './logindoctor.css';
import { collection,query,where,getDocs } from 'firebase/firestore';

const Logind = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlesigninButtonClick = async () => {
    try {
      console.log('Username:', username);
      console.log('Password:', password);
  
      const doctorRef = collection(db, 'Doctors');
      const q = query(doctorRef, where('Username','==',username), where('Password','==',password));
      const snapshot = await getDocs(q);
  
      console.log('Snapshot size:', snapshot.size);
  
      if (snapshot.empty) {
        alert('Invalid username or password.');
      } else {
        navigate('/Doctor');
      }
    } catch (error) {
      console.error('Error fetching doctor:', error);
      alert('An error occurred while signing in. Please try again later.');
    }    
};
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button-container">
          <button onClick={handlesigninButtonClick}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Logind;
