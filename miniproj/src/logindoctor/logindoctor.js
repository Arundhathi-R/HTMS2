import React from 'react';
import {useNavigate} from 'react-router-dom';
import './logindoctor.css';

const Logind = () => {
  const navigate = useNavigate();

  //const handlesignupButtonClick = () => {
   // navigate('/signup');
  //};
   const handlesigninButtonClick = () => {
       navigate('/Doctor');
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
          <a href="/forgotpassword">Forgot password?</a>
        </div>
        <div className="button-container">
          <button onClick={handlesigninButtonClick}>Sign In</button>
           
        </div>
      </div>
    </div>
  );
}

export default Logind;