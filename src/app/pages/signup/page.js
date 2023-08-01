"use client"
import React, {  useState } from 'react';
import "./Signup.css"
import { useRouter } from 'next/navigation';
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }
    const loginData = {
      email,
      password,
    };

    localStorage.setItem('loginData', JSON.stringify(loginData));
    router.push("/pages/login")
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };


  return (
    <div className='login'>
    <div className='login__1'>
    <form onSubmit={handleSubmit} className='form'>
    <h1>Triluxo</h1>
      <div className='form__1'>
        <label htmlFor="email">Email</label><br/>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form__1'>
        <label htmlFor="password">Password</label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='form__1'>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br/>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setIsPasswordMatch(true); // Reset password match error when typing
          }}
          required
        />
      </div>
        {!isPasswordMatch && <p>Passwords do not match!</p>}
      <button type="submit">Sign Up</button>
    </form>
    </div>

    </div>
    
  );
};

export default SignupForm;
