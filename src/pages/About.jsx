import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Story</p>
          <h1 className="page-title">The Art of<br/>Refined Simplicity</h1>
          <p className="page-subtitle">
            We believe in the power of less. In a world of noise, we choose silence. 
            In a world of chaos, we choose clarity.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-grid">
          <div className="about-story-image">
            <div className="image-frame">
              <span className="image-placeholder">E</span>
            </div>
          </div>
          <div className="about-story-content">
            <h2>Founded in Poetry</h2>
            <p>
              Paper & Poetry was born from a simple observation: the digital world 
              had forgotten the art of stillness. We set out to change that.
            </p>
            <p>
              Like the finest literary journals, we believe design should be read, 
              not just seen. Every pixel should breathe. Every interaction should sing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-header">
          <p className="page-eyebrow">Our Principles</p>
          <h2>What We Believe</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-number">01</span>
            <h3>Intentionality</h3>
            <p>Every decision must serve a purpose. If it doesn't add, it subtracts.</p>
          </div>
          <div className="value-card">
            <span className="value-number">02</span>
            <h3>Timelessness</h3>
            <p>We design for forever, not for the moment. Trends fade; truth endures.</p>
          </div>
          <div className="value-card">
            <span className="value-number">03</span>
            <h3>Honesty</h3>
            <p>Design should reveal, not conceal. Truth in every curve, every shadow.</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section">
        <div className="vision-content">
          <p className="page-eyebrow">Our Vision</p>
          <blockquote>
            "To restore the quiet dignity of digital spaces, 
            one thoughtful design at a time."
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Let's Create Together</h2>
        <p>Have a project in mind? We'd love to hear from you.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </div>
  )
}

export default About