import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Aditya Raj',
      };

      await emailjs.send(
        'service_g3vojpr', // Your EmailJS service ID
        'template_qw22x71', // Your EmailJS template ID
        templateParams,
        'lEUYbbxs_ti93c39S' // Your EmailJS public key
      );
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again or email me directly.' 
      });
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
              href="https://calendly.com/aditya-raj88005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="schedule-btn"
            >
              Book a time
            </a>
          </div>
          
          <div className="contact-links">
            <a 
              href="mailto:aditya.raj88005@gmail.com" 
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