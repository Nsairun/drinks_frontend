import React from 'react';
import './Login.css';

function Login() {
  return (
    <form action="">
      <div className="login">
        <h1>Log In</h1>
        <input type="email" placeholder="email address" />
        <input type="password" placeholder="Enter password" />
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default Login;
