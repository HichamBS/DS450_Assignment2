import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      detail: 'hichambenstitou96@gmail.com',
      link: 'mailto:hichambenstitou96@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '+1 (551) 285-7664',
      link: 'tel:+15512857664',
      icon: '📱'
    },
    {
      title: 'Location',
      detail: 'Rutherford, NJ',
      link: null,
      icon: '📍'
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span><strong>{info.title}:</strong> <a href={info.link} className="contact-value">{info.detail}</a></span>
              ) : (
                <span><strong>{info.title}:</strong> <span className="contact-value">{info.detail}</span></span>
              )}
            </div>
          ))}
          
          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/HichamBS" className="social-link github">
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/hicham-benstitou-bb0405210/" className="social-link linkedin">
                <span className="social-icon">💼</span> LinkedIn
              </a>
              <a href="https://x.com/HBenstitou" className="social-link twitter">
                <span className="social-icon">🐦</span> Twitter
              </a>
              <a href="https://www.instagram.com/hicham.bst/" className="social-link instagram">
                <span className="social-icon">📸</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;