import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static credentials
    const validEmail = "admin@pos.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('user', JSON.stringify({ email }));
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="container1">
    <h1>SharixPOS</h1>
    <h2 className="login-heading">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
          required 
        />
      </div>
      <button type="submit" className="btn">Login</button>
    </form>
    <Link to="/forget-password" className="forgot-password">Forgot Password?</Link>
  </div>
  
  );
};

export default LoginPage;
