import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-eyebrow">Let's Talk</p>
          <h1 className="page-title">Get in<br/>Touch</h1>
          <p className="page-subtitle">
            We love hearing about new projects, collaborations, 
            and the occasional design philosophy debate.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid-section">
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
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
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-section">
              <h3>Visit Us</h3>
              <address>
                123 Design District<br/>
                Studio 4B<br/>
                New York, NY 10001
              </address>
            </div>

            <div className="contact-info-section">
              <h3>Contact</h3>
              <p>
                <a href="mailto:hello@paperandpoetry.studio">hello@paperandpoetry.studio</a>
              </p>
              <p>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </p>
            </div>

            <div className="contact-info-section">
              <h3>Hours</h3>
              <p>
                Monday – Friday<br/>
                9:00 AM – 6:00 PM EST
              </p>
            </div>

            <div className="contact-info-section">
              <h3>Elsewhere</h3>
              <div className="social-links">
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Dribbble">Dribbble</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <span>📍</span>
          <p>123 Design District, New York</p>
        </div>
      </section>
    </div>
  )
}

export default Contact