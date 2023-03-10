import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../api/auth';

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // write code...
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };

    setIsLoading(true);
    await register(data);
    setIsLoading(false);
    navigate('/Login');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="user">
        <h1> CREATE ACOUNT </h1>
        <p>{isLoading ? 'loading...' : ''}</p>
        <div className="userInput">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input type="text" placeholder="Last Name" name="lastName" required />
          <input
            type="email"
            placeholder="email"
            name="emailAddress"
            required
          />
          <input type="phone" placeholder="Phone Number" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Password confirmation"
            name="passwordConfirmation"
            required
          />
        </div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default Register;
