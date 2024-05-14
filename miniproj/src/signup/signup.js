import React from 'react';
import './signup.css'; 
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // Import Firebase auth instance

const Signup = () => {
    const navigate = useNavigate();

    const handleokButtonClick = async () => {
        const name = document.getElementById('Name').value;
        const address = document.getElementById('Address').value;
        const phone = document.getElementById('Phone no').value;
        const age = document.getElementById('Age').value;
        const gender = document.getElementById('Gender').value;
        const email = document.getElementById('Username').value;
        const password = document.getElementById('Password').value;

        try {
            // Create user in Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);

            // After successful signup, navigate to login page
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle error, show message to user, etc.
        }
    };

    const handlebackButtonClick = () => {
        navigate('/login');
    };

    return (
      <div className="signup-container">
        <button className="backButton" onClick={handlebackButtonClick}>Back</button>
  
        <form className="signup-form">
          <div className="input-container">
            <label htmlfor="Name">Name:</label>
            <input type="text" id="Name" placeholder="Enter your name" />
            <hr className="line" />
          </div>
          <div className="input-container">
            <label htmlfor="Address">Address:</label>
            <input type="text"  id="Address" placeholder=" Enter your address" />
            <hr className="line" />
          </div>
          <div className="input-container">
            <label htmlFor='Phone no'>Phone no:</label>
            <input type="tel" id="Phone no" placeholder="Enter your Phone No" />
            <hr className="line" />
          </div>
          <div className="input-container">
            <label htmlFor='Age'>Age:</label>
            <input type="text" id="Age" placeholder="Age" />
            <label htmlFor='Gender'>Gender</label>
            <input type="text" id="Gender" placeholder="Gender" />
            <label htmlFor='Username'>Username:</label>
            <input type="email" id="Username" placeholder="Enter your Username(email)" />
            <label htmlFor='Password'>Password:</label>
            <input type="password" id="Password" placeholder=" Enter your Password" />
          </div>
        </form>
        <button className="ok-button" onClick={handleokButtonClick}>OK</button>
      </div>
    );
};

export default Signup;
