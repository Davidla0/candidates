import React from 'react';
import AuthForm from './AuthForm';
import { signup } from '../services/user.service';

function SignUp({ toggleMode }) {
  const signupFields = {
    username: '',
    email: '',
    password: '',
  };

  const handleSignup = async (formData) => {
    return await signup(formData);
  };

  return (
    <div className="signup-container">
      <AuthForm onSubmit={handleSignup} fields={signupFields} />
      <p>
        Already have an account?{' '}
        <button className="signin-button" onClick={toggleMode}>
          Sign In
        </button>
      </p>
    </div>
  );
}

export default SignUp;
