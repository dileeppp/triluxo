"use client"
import React, {  useState } from 'react'
import { useRouter } from 'next/navigation'
import "./Login.css"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the login data exists in local storage
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      const loginData = JSON.parse(loginDataString);
      if (loginData.email === email && loginData.password === password) {
        // User is logged in successfully
        setError('');
        console.log('Logged in successfully!');

        
        setEmail('');
        setPassword('');
        router.push('/pages/blog')
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('User not registered. Please sign up first.');
    }
  };

 
  return (
    <div className="login">
    <div className="login__1">
    <form onSubmit={handleSubmit} className='form'>
    <h1>Triluxo</h1>
      <div className='form__1'>
        <label >Email</label>
        <br/>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form__1'>
        <label htmlFor="password">Password</label><br/> 
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit"  >Login</button>
      <p>Dont have an account <a href='/pages/signup'>Signup</a></p> 
    </form>
    </div>
      
    </div>
  )
}

export default Login
