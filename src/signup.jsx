import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, email, password }),
      });

      if (response.ok) {
        alert('Signed up successfully!');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to sign up');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setErrorMessage('An error occurred during sign up. Please try again.');
    }
  };

  return (
    <div className='form-box'>
      <div className="signup-form">
        <div className="top">
          <header>Sign Up</header>
        </div>
        <span>Already have an account? <Link to="/login">Sign In</Link></span>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign Up" />
          </div>
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;