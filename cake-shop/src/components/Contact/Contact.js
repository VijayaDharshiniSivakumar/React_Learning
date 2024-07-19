import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '5c65de8f-f352-46a1-b3ba-02fe4c7268c7',
        ...formData
      })
    });

    const result = await response.json();

    if (result.success) {
      setResponseMessage('Your message has been sent successfully!');
    } else {
      setResponseMessage('Something went wrong. Please try again.');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <h2>Make Your Orders Here</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
