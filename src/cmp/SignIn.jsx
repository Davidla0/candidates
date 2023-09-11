// SignIn.js
import React from 'react';
import AuthForm from './AuthForm';
import { signin } from '../services/user.service';

function SignIn({ toggleMode }) {
  const signinFields = {
    username: '',
    password: '',
  };

  const handleSignin = async (formData) => {
    return await signin(formData);
  };

  return (
    <div className="signin-container">
      <AuthForm onSubmit={handleSignin} fields={signinFields} />
      <p>
        Don't have an account?{' '}
        <button className='signin-button' onClick={toggleMode}>Sign Up</button>
      </p>
    </div>
  );
}

export default SignIn;
