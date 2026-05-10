import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: "The Silence Between Words",
    excerpt: "Exploring the whitespace in design—what we learn from the spaces that aren't there.",
    category: "Design",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Typography as Voice",
    excerpt: "How typefaces carry emotion, and why your font choice speaks louder than you think.",
    category: "Typography",
    date: "March 8, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Art of the Edit",
    excerpt: "What poets know about subtraction that designers often forget.",
    category: "Philosophy",
    date: "February 28, 2024",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Designing for the Quiet Mind",
    excerpt: "Creating digital experiences that calm rather than agitate.",
    category: "UX",
    date: "February 20, 2024",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Where Code Meets Canvas",
    excerpt: "The intersection of technical precision and artistic vision.",
    category: "Process",
    date: "February 12, 2024",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "The Last Detail",
    excerpt: "Why the smallest decisions matter most in the end.",
    category: "Philosophy",
    date: "February 5, 2024",
    readTime: "3 min read"
  }
]

function Blog() {
  return (
    <div className="page blog-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-eyebrow">Journal</p>
          <h1 className="page-title">Thoughts on<br/>Design & Life</h1>
          <p className="page-subtitle">
            Exploring the intersection of aesthetics, functionality, 
            and the quiet art of living well.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="featured-content">
          <span className="featured-label">Featured</span>
          <h2>The Silence Between Words</h2>
          <p>
            In every great design, there exists a sacred space—the pause between 
            elements that allows the eye to rest. This is not emptiness; it is 
            possibility. It is the breath of the composition.
          </p>
          <Link to="/contact" className="read-more">Continue Reading →</Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="posts-section">
        <div className="posts-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-divider">·</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="post-read-time">{post.readTime}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Join the Conversation</h3>
          <p>Thoughts on design, creativity, and living intentionally. No spam, ever.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog