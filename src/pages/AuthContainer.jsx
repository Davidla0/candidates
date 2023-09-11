import React, { useState } from 'react';
import SignIn from '../cmp/SignIn';
import SignUp from '../cmp/SignUp';

function AuthContainer() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      {isSignup ? 
        <SignUp toggleMode={toggleMode} />
       : 
        <SignIn toggleMode={toggleMode} />
      }
    </div>
  );
}

export default AuthContainer;
