import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password);
            navigate("/"); 
            window.location.reload(); 
        } catch (error) {
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <br /><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;