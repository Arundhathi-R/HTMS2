import React from 'react';
import './signup.css'; 

const signup = () => {
  return (
    <div className="signup-container">
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
          <label htmlfor="Email">Email:</label>
          <input type="email" id="Email" placeholder="Enter a valid Email" />
          <hr className="line" />
        </div>
        <div className="input-container">
          <label htmlFor='Age'>Age:</label>
          <input type="text" id="Age" placeholder="Age" />
          <label htmlFor='Gender'>Gender</label>
          <input type="text" id="Gender" placeholder="Gender" />
          <label htmlFor='Username'>Username:</label>
          <input type="text" id="Username" placeholder="Enter your Username" />
          <label htmlFor='Password'>Password:</label>
          <input type="password" id="Password" placeholder=" Enter your Password" />
        </div>
      </form>
      <button className="ok-button">OK</button>
    </div>
  );
};

export default signup;