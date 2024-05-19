import React, { useState } from 'react';
import './signup.css'; 
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Signup = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleokButtonClick = async () => {
        const name = document.getElementById('Name').value;
        const address = document.getElementById('Address').value;
        const phone = document.getElementById('Phone').value;
        const age = document.getElementById('Age').value;
        const gender = document.getElementById('Gender').value;
        const password = document.getElementById('Password').value;
        const email = document.getElementById('Username').value;

        if (address.trim() === '') {
            setErrorMessage('Address cannot be empty.');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            setErrorMessage('Phone number must be a 10-digit number.');
            return;
        }

        if (parseInt(age) < 18) {
            setErrorMessage('Age must be 18 or older.');
            return;
        }

        try {
            // register new patients
            await createUserWithEmailAndPassword(auth, email, password);
            const docRef1 = await addDoc(collection(db, "Patients"), {
                Address: address,
                Age: age,
                Gender: gender,
                Name: name,
                Phone: phone,
            });
            console.log("Document written with ID: ", docRef1.id);
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error signing up:', error.message);
            setErrorMessage('Error signing up: ' + error.message);
        }
    };

    const handlebackButtonClick = () => {
        navigate('/login');
    };

    const handleModalClose = () => {
        setShowSuccessModal(false);
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <button className="backButton" onClick={handlebackButtonClick}>Back</button>

            <form className="signup-form">
                <div className="input-container">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="Name" placeholder="Enter your name" />
                    <hr className="line" />
                </div>
                <div className="input-container">
                    <label htmlFor="Address">Address:</label>
                    <input type="text" id="Address" placeholder="Enter your address" />
                    <hr className="line" />
                </div>
                <div className="input-container">
                    <label htmlFor='Phone'>Phone no:</label>
                    <input type="tel" id="Phone" placeholder="Enter your Phone No" />
                    <hr className="line" />
                </div>
                <div className="input-container">
                    <label htmlFor='Age'>Age:</label>
                    <input type="number" id="Age" placeholder="Age" />
                </div>
                <div className="input-container">
                    <label htmlFor='Gender'>Gender</label>
                    <select id="Gender">
                        <option value="default">Default</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor='Username'>Username:</label>
                    <input type="email" id="Username" placeholder="Enter your Username (email)" />
                </div>
                <div className="input-container">
                    <label htmlFor='Password'>Password:</label>
                    <input type="password" id="Password" placeholder="Enter your Password" />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <button className="ok-button" onClick={handleokButtonClick}>Register</button>

            {showSuccessModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Registration successful!</p>
                        <button className="modal-ok-button" onClick={handleModalClose}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
