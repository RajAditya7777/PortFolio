import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact-intro">Send a message and I'll get back to you</p>

      <div className="contact-container">
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
              placeholder="Your name"
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
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            ></textarea>
          </div>

          {formStatus.error && (
            <div className="error-message">
              {formStatus.error}
            </div>
          )}

          {formStatus.submitted && (
            <div className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-option">
            <h3>Schedule a call</h3>
            <a 
              href="https://calendly.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="schedule-btn"
            >
              Book a time
            </a>
          </div>
          
          <div className="contact-links">
            <a 
              href="mailto:adityaraj7777@gmail.com" 
              className="contact-link"
            >
              Email
            </a>
            <a 
              href="https://t.me/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 