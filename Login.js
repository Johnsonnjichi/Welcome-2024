import React from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleLogin = () =>{
        if (username === 'superadmin') {
            localStorage.setItem('role', 'superadmin');
            navigate.push('/super-admin');
        } else if (username === 'admin') {
            localStorage.setItem('role', 'admin');
            navigate.push('/admin');
        } else if (username === 'user') {
            localStorage.setItem('role', 'user');
            navigate.push('/user');
        } else {
            alert('Invalid credentials');
        }
    }
    return (

        <div className="Container">
            <h2>LogIn</h2>
            <label>Username:</label>
            <input type="text"
            placeholder="Username"
             value={username}
            onChange={e=> setUsername(e.target.value)}
            />

            <label>Password:</label>
            <input type="password"
            placeholder="Input pasword"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
            
        
    )
}
export default Login;