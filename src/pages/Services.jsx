import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: "Brand Identity",
    description: "We craft visual identities that capture the essence of your story. From logos to complete brand systems, we design with intention.",
    includes: [
      "Logo design & variations",
      "Brand guidelines",
      "Color & typography systems",
      "Visual assets library"
    ],
    icon: "◆"
  },
  {
    id: 2,
    title: "Web Design",
    description: "Digital experiences that breathe. Websites that tell your story and guide visitors with quiet confidence.",
    includes: [
      "UI/UX design",
      "Responsive development",
      "CMS integration",
      "Performance optimization"
    ],
    icon: "◇"
  },
  {
    id: 3,
    title: "Content Strategy",
    description: "Words matter. We help you find yours and place them where they'll make the most impact.",
    includes: [
      "Content audits",
      "Editorial direction",
      "Tone & voice guidelines",
      "Copywriting"
    ],
    icon: "○"
  },
  {
    id: 4,
    title: "Art Direction",
    description: "Creative vision for campaigns, editorials, and brand moments that demand attention through subtlety.",
    includes: [
      "Campaign concept",
      "Photo direction",
      "Visual storytelling",
      "Creative direction"
    ],
    icon: "◎"
  }
]

const pricingTiers = [
  {
    name: "Starter",
    price: "From $2,500",
    description: "Perfect for new businesses seeking their first identity.",
    features: [
      "Logo design",
      "Basic brand guidelines",
      "2 revision rounds",
      "5 business days"
    ]
  },
  {
    name: "Professional",
    price: "From $7,500",
    description: "Comprehensive identity for growing brands.",
    features: [
      "Full brand system",
      "Extended guidelines",
      "Web presence",
      "Unlimited revisions",
      "2 weeks"
    ]
  },
  {
    name: "Bespoke",
    price: "Custom",
    description: "Tailored solutions for established brands.",
    features: [
      "Everything in Professional",
      "Art direction",
      "Content strategy",
      "Ongoing support",
      "Flexible timeline"
    ]
  }
]

function Services() {
  return (
    <div className="page services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <p className="page-eyebrow">What We Do</p>
          <h1 className="page-title">Services built<br/>with Purpose</h1>
          <p className="page-subtitle">
            We don't just design. We craft experiences that honor your story 
            and connect with your audience.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-includes">
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="pricing-header">
          <p className="page-eyebrow">Investment</p>
          <h2>Project报价</h2>
          <p className="pricing-subtitle">
            Every project is unique. These are starting points—we'll discuss 
            your specific needs.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingTiers.map((tier, i) => (
            <div key={i} className="pricing-card">
              <h3>{tier.name}</h3>
              <span className="pricing-price">{tier.price}</span>
              <p>{tier.description}</p>
              <ul>
                {tier.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="pricing-cta">Inquire</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="process-header">
          <p className="page-eyebrow">How We Work</p>
          <h2>The Process</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>We listen. We learn your story, your goals, your audience. Before any pixels, we seek understanding.</p>
          </div>
          <div className="process-step">
            <span>02</span>
            <h3>Direction</h3>
            <p>We present concepts—not many, just the best. We refine until it feels right.</p>
          </div>
          <div className="process-step">
            <span>03</span>
            <h3>Development</h3>
            <p>With direction set, we build with precision. Every detail matters.</p>
          </div>
          <div className="process-step">
            <span>04</span>
            <h3>Delivery</h3>
            <p>Your project, complete. We ensure everything works, everywhere.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Begin?</h2>
        <p>Let's discuss your project over coffee—or tea.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>
    </div>
  )
}

export default Services