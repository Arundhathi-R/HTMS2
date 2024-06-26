import React, { useState } from 'react';
import './forgotpassword.css';
import { useNavigate } from 'react-router-dom';

function Forgotpassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    function handleReset() {
        setShowPopup(true);
    }
    const navigate = useNavigate();
  
    const handlebackButtonClick = () => {
        navigate('/login');
      };
      const handleokButtonClick = () => {
        navigate('/login');
      };
    return (
        <div className="container">
            <button className="backButton" onClick={handlebackButtonClick}>← Back</button>
            <h2 className="heading">Create new password</h2>
            <p className="description">Your new password must be different from the previous password.</p>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: 'rgb(217, 217, 217)' }}
                />
            </div>
            <p class="description">Must be atleast 8 characters.</p>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ backgroundColor: 'rgb(217, 217, 217)' }}
                />
            </div>
            <p class="description">Both passwords must match.</p>
            <button className="resetButton" onClick={handleReset}>Reset</button>

            {showPopup && (
                <div className="popup" style={{ backgroundColor: 'rgb(217, 217, 217)' }}>
                    <p>Confirmation for resetting your password has been sent to your email.</p>
                    <button className="okButton" onClick={() => setShowPopup(false)}  onClick={handleokButtonClick}>OK</button>
                </div>
            )}
        </div>
    );
}

export default Forgotpassword;