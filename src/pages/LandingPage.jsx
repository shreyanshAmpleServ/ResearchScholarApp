import { useNavigate } from 'react-router-dom'
import { BookOpen, TrendingUp, Users, Award, ArrowRight, Sparkles, FileText, Database } from 'lucide-react'
import './LandingPage.css'
import logo from "../Assets/logoR.png"

const LandingPage = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <BookOpen />,
      title: "Publish Research",
      description: "Share your groundbreaking research with the global academic community"
    },
    {
      icon: <TrendingUp />,
      title: "Track Impact",
      description: "Monitor citations, downloads, and the reach of your publications"
    },
    {
      icon: <Users />,
      title: "Collaborate",
      description: "Connect with fellow researchers and build academic networks"
    },
    {
      icon: <Award />,
      title: "Recognition",
      description: "Gain visibility and recognition for your scholarly contributions"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Research Papers" },
    { number: "5,000+", label: "Active Scholars" },
    { number: "150+", label: "Universities" },
    { number: "50+", label: "Countries" }
  ]

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            {/* <Sparkles className="logo-icon" /> */}
            <img src={logo}  className='logo-icon ' />
            <span className="logo-text">Universal Journal of Advanced Research</span>
            {/* <span className="logo-text">ResearchHub</span> */}
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#stats">Impact</a>
            <button className="nav-btn" onClick={() => navigate('/library')}>
              Explore Library
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="radial-gradient"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Database size={16} />
            <span>Empowering Academic Excellence</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Transform Your</span>
            <span className="title-line highlight">Research Journey</span>
          </h1>
          
          <p className="hero-description">
            A comprehensive platform designed for research scholars to publish, 
            discover, and collaborate on cutting-edge academic research. Join a 
            vibrant community of thinkers shaping the future of knowledge.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('/library')}>
              <FileText size={20} />
              Browse Publications
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              <Award size={20} />
              Submit Research
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card card-1">
            <div className="card-icon"><BookOpen /></div>
            <div className="card-content">
              <div className="card-title">Latest Publication</div>
              <div className="card-text">Quantum Computing in AI</div>
            </div>
          </div>
          <div className="visual-card card-2">
            <div className="card-icon"><TrendingUp /></div>
            <div className="card-content">
              <div className="card-title">Citation Growth</div>
              <div className="card-text">+247% this month</div>
            </div>
          </div>
          <div className="visual-card card-3">
            <div className="card-icon"><Users /></div>
            <div className="card-content">
              <div className="card-title">Active Researchers</div>
              <div className="card-text">1,234 online now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">Empowering Research Excellence</h2>
          <p className="section-description">
            Everything you need to publish, share, and amplify your academic impact
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Share Your Research?</h2>
          <p className="cta-description">
            Join thousands of scholars making an impact in the global research community
          </p>
          <button className="btn btn-large" onClick={() => navigate('/library')}>
            Explore Research Library
            <ArrowRight size={24} />
          </button>
        </div>
        <div className="cta-decorative">
          <div className="decorative-circle circle-1"></div>
          <div className="decorative-circle circle-2"></div>
          <div className="decorative-circle circle-3"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Sparkles className="footer-logo" />
            <span>ResearchHub</span>
          </div>
          <p className="footer-text">
            Advancing knowledge through collaborative research
          </p>
          <p className="footer-copyright">
            © 2026 ResearchHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
