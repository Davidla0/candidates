import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

function Logout() {
  const cookies = new Cookies();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    cookies.remove('token');
    navigate('/'); // Navigate to the home page
  };

  return (
    <button className='logout-btn' onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
