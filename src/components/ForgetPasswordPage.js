import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

const ForgetPasswordPage = () => {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" className="btn">Reset Password</button>
      </form>
      <Link to="/" className="back-to-login">Back to Login</Link>
    </div>
  );
};

export default ForgetPasswordPage;