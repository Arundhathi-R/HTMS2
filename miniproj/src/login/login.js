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
            // patient sign in with Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/patient');
        } catch (error) {
            console.error('Error signing in:', error.message);
            // error handling
        }
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgotpassword');
    };

    return (
      <div className="login-container7">
        <div className="login-form7">
          <h2>Login</h2>
          <div className="input-container7">
            <label >Username</label>
            <input type="email" placeholder="@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-container7">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="forgot-password7">
            <a href="/forgotpassword" onClick={handleForgotPasswordClick}>Forgot password?</a>
          </div>
          <div className="button-container7">
            <button onClick={handlesigninButtonClick}>Sign In</button>
             <button onClick={handlesignupButtonClick}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  };  

export default Login;