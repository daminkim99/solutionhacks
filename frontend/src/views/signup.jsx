// Login.jsx
import { useState } from 'react';
import axios from 'axios'; 

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Here you can call an API to log in
    ///////////////////////////////////
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      console.log('API response:', response.data);
      // ✅ Do something with the response
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed');
    }
    /////////////////
  }

  

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


/*export function SignUp() {
    return(
        <p>HELLO!</p>
    )
} */

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './views/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SignUp/>
  )
}

export default App
*/