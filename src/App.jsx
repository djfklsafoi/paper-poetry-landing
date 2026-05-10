import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Navigation Component
function Navigation() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">P&P</Link>
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
          <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>
        <button 
          className={`nav-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
        <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
      </div>
    </>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-logo">Paper & Poetry</p>
        <p className="footer-tagline">Design for the quiet mind.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="footer-copyright">© 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

// Main App with Router
function App() {
  return (
    <BrowserRouter>
      <div className="landing-page">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App