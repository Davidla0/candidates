import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

function AuthForm({ onSubmit, fields }) {
  const [formData, setFormData] = useState(fields);
  const navigate = useNavigate()
  const cookies = new Cookies();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData).then(res => {
      cookies.set('token', res)
    });
    setTimeout(() => {
      navigate('/candidates')
    }, 1000);

  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {Object.entries(fields).map(([fieldName, initialValue]) => (
        <div key={fieldName} className="form-group">
          {/* <label htmlFor={fieldName} className="form-label">
            {fieldName}
          </label> */}
          <input
            placeholder={`${fieldName}`}
            type="text"
            id={fieldName}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      ))}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default AuthForm;
