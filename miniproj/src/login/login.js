import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="forgot-password">
          <a href="/forgotpassword">Forgot password?</a>
        </div>
        <div className="button-container">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;