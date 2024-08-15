// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.css';
import google from '../../assets/google.png'
// eslint-disable-next-line react/prop-types
const Login = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <button className="google-btn">
  <img src={google} className="google-logo" />
  Login with Google
</button>

      </div>
    </div>
  );
};

export default Login;
