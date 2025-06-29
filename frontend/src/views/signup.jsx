import { useState } from 'react';
import axios from 'axios';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('Logging in with:', { email, password });

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
  }

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      background: 'linear-gradient(135deg, #8cbdb2, #5d8a7d)', // consistent gradient
      padding: '2rem',
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '3rem 4rem',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        textAlign: 'center',
      }}>
        <h1 style={{
          marginBottom: '0.5rem',
          fontSize: '2.4rem',
          fontWeight: '700',
          color: '#333',
          letterSpacing: '1.2px',
        }}>
          Insert Title
        </h1>
        <p style={{
          marginBottom: '2.5rem',
          fontSize: '1.1rem',
          color: '#666',
          fontWeight: '500',
        }}>
          Please enter your login credentials
        </p>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <label style={{ fontWeight: '600', color: '#444' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '12px 15px',
              margin: '8px 0 20px',
              borderRadius: '12px',
              border: '1.8px solid #ddd',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
              outline: 'none',
            }}
            onFocus={e => (e.target.style.borderColor = '#5d8a7d')}
            onBlur={e => (e.target.style.borderColor = '#ddd')}
          />

          <label style={{ fontWeight: '600', color: '#444' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            style={{
              width: '100%',
              padding: '12px 15px',
              margin: '8px 0 30px',
              borderRadius: '12px',
              border: '1.8px solid #ddd',
              fontSize: '1rem',
              transition: 'border-color 0.3s',
              outline: 'none',
            }}
            onFocus={e => (e.target.style.borderColor = '#5d8a7d')}
            onBlur={e => (e.target.style.borderColor = '#ddd')}
          />

          <button
              type="submit"
              style={{
              width: '75%',
              margin: '0 auto',
              display: 'block',
              padding: '14px',
              backgroundColor: '#5d8a7d',  // matched button color
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
              boxShadow: '0 8px 15px rgba(93,138,125,0.4)',
              transition: 'background-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = '#4b7367';
              e.target.style.boxShadow = '0 12px 20px rgba(75,115,103,0.6)';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = '#5d8a7d';
              e.target.style.boxShadow = '0 8px 15px rgba(93,138,125,0.4)';
            }}
          >
            Login
          </button>

          <p style={{ marginTop: '1.8rem', color: '#5d8a7d', fontSize: '0.9rem', textAlign: 'center' }}>
            Forgot your password?{' '}
            <a
              href="#"
              style={{
                color: '#5d8a7d',  // matched link color
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'text-decoration 0.2s',
              }}
              onMouseEnter={e => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.target.style.textDecoration = 'none')}
            >
              Reset here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
