import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesignupButtonClick = () => {
        navigate('/signup');
    };

    const handlesigninButtonClick = async () => {
        try {
            // Sign in user with Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/patient');
        } catch (error) {
            console.error('Error signing in:', error.message);
            // Handle error, show message to user, etc.
        }
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgotpassword');
    };

    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <div className="input-container">
            <label >Username</label>
            <input type="email" placeholder="@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="forgot-password">
            <a href="/forgotpassword" onClick={handleForgotPasswordClick}>Forgot password?</a>
          </div>
          <div className="button-container">
            <button onClick={handlesigninButtonClick}>Sign In</button>
             <button onClick={handlesignupButtonClick}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  };  

export default Login;