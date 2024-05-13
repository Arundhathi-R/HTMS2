import React from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handlesignupButtonClick = () => {
    navigate('/signup');
  };
   const handlesigninButtonClick = () => {
       navigate('/patient');
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
          <input type="text" placeholder="@gmail.com"/>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" />
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