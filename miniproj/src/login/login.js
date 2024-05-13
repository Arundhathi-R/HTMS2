import React from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useState} from "react";

const Login = () => {
  const navigate = useNavigate();

  const handlesignupButtonClick = () => {
    navigate('/signup');
  };
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  console.log(auth?.currentUser?.email)

   const handlesigninButtonClick = async () => {
    try{await createUserWithEmailAndPassword(auth, email, password)
       navigate('/patient'); } catch(err){
        console.error(err);
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
          <input type="text" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
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
}

export default Login;