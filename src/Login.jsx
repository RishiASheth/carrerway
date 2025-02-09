import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [newPassword, setNewPassword] = useState(""); // State for new password
    const [errorMessage, setErrorMessage] = useState(""); // State to hold the error message
    const navigate = useNavigate();

    const login = async (email, password) => {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Save user ID and name in local storage
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userName', data.userName); // Store userName
            setErrorMessage('');
            navigate('/home'); // Redirect to home page on successful login
        } else {
            const errorData = await response.json();
            setErrorMessage(errorData.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset the error message
        login(email, password);
    };

    // const changePassword = async () => {
    //     try {
    //         console.log("Sending request to update password for email:", email);
    //         const response = await fetch('http://localhost:3001/updatePassword', {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ email: email, newPassword: newPassword }),
    //         });

    //         const text = await response.text();
    //         let result;
    //         try {
    //             result = JSON.parse(text);
    //         } catch (err) {
    //             throw new Error("Response is not JSON");
    //         }

    //         if (response.ok) {
    //             alert("Password changed successfully");
    //             setNewPassword("");
    //         } else {
    //             alert(result?.error || "Failed to change password.");
    //         }
    //     } catch (err) {
    //         console.error('Error updating password:', err);
    //         setErrorMessage('Failed to update password.');
    //     }
    // };

    // const handleUpdatePassword = (e) => {
    //     e.preventDefault();
    //     setErrorMessage(""); // Reset the error message
    //     changePassword(); // Call the correct function
    // };

    return (
        <div className='form-box'>
            <div className="login-form">
                <div className="top">
                    <header>Sign In </header>
                    {/* <GoogleLogin onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        navigate('/home')
                    }} onError={() => {
                        console.log('Login Failed');
                    }} /> */}
                </div>
                <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                <form onSubmit={handleSubmit}>
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
                        <input type="submit" className="submit" value="Sign In" />
                    </div>
                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}
                </form>

                {/* <div className="update-password-form">
                    <header>Forgot Password?</header>
                    <form onSubmit={handleUpdatePassword}>
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
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Update Password" />
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    );
}

export default Login;