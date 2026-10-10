import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("password123");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Please enter username and password.");
            return;
        }
        dispatch(login());
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Credit Portal</h2>
                    <p>Secure login to manage your cards & transactions</p>
                </div>
                <form onSubmit={handleLogin} className="login-form">
                    {error && <div className="login-error">{error}</div>}
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            placeholder="Enter username" 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="Enter password" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                    <div className="login-hint">
                        <small>Dummy login: Use any credentials to sign in</small>
                    </div>
                </form>
            </div>
        </div>
    );
}
