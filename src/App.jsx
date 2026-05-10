import { useEffect, useState } from 'react'

function App() {
  const [charsAnimated, setCharsAnimated] = useState({})

  useEffect(() => {
    // Animate characters with staggered delay
    const words = document.querySelectorAll('.hero-title-line .word')
    let wordDelay = 0
    
    words.forEach((word) => {
      const chars = word.querySelectorAll('.char')
      chars.forEach((char, i) => {
        char.style.animationDelay = `${wordDelay + i * 0.05}s`
      })
      wordDelay += chars.length * 0.05 + 0.1
    })
  }, [])

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-logo">P&P</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 2024</p>
          
          <h1 className="hero-title">
            <span className="hero-title-line">
              <span className="word">
                <span className="char">P</span>
                <span className="char">a</span>
                <span className="char">p</span>
                <span className="char">e</span>
                <span className="char">r</span>
              </span>
            </span>
            <span className="hero-title-line">
              <span className="word">
                <span className="char">&</span>
              </span>
            </span>
            <span className="hero-title-line">
              <span className="word">
                <span className="char">P</span>
                <span className="char">o</span>
                <span className="char">e</span>
                <span className="char">t</span>
                <span className="char">r</span>
                <span className="char">y</span>
              </span>
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Where minimalist design meets literary soul. 
            Crafting digital experiences that breathe like verse.
          </p>
          
          <a href="#contact" className="hero-cta">
            Explore Collection
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-content">
          <p className="quote-text">
            "The art of simplicity is a mystery of nature. 
            True elegance is found in what remains unsaid."
          </p>
          <p className="quote-author">— Architectural Digest</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-header">
          <p className="features-eyebrow">What We Do</p>
          <h2 className="features-title">Curated Excellence</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 24h32M24 8v32M14 14l20 20M34 14L14 34" strokeLinecap="round"/>
            </svg>
            <h3 className="feature-title">Typography</h3>
            <p className="feature-description">
              Hand-selected typefaces that speak with quiet authority and timeless grace.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="24" cy="24" r="16"/>
              <circle cx="24" cy="24" r="6"/>
              <path d="M24 4v4M24 40v4M4 24h4M40 24h4" strokeLinecap="round"/>
            </svg>
            <h3 className="feature-title">Craft</h3>
            <p className="feature-description">
              Every pixel placed with intention. Every interaction refined to perfection.
            </p>
          </div>
          
          <div className="feature-card">
            <svg className="feature-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 40V20l16-12 16 12v20a4 4 0 01-4 4H12a4 4 0 01-4-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 44V28h12v16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="feature-title">Heritage</h3>
            <p className="feature-description">
              Rooted in classic design principles, reimagined for the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-logo">Paper & Poetry</p>
        <p className="footer-text">© 2024. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App