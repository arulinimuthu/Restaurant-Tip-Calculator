import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword (auth, email, password);
            alert ("Logged in successfully!");
        } 
        catch (e) {
            console.error (e.message);
        }
    }
    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider ();

            await signInWithPopup (auth, provider);
            alert ("Logged in successfully with Google!");
        } 
        catch (e) {
            console.error (e.message);
         }
    };

    return (
        <div>
            <h1>
                Login
            </h1>
            <button onClick = {handleGoogleLogin}>
                Login With Google
            </button>
            <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
        </div>
    );


};

export default Login;