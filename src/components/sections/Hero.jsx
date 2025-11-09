import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/placeholder.svg?key=gwgoa" alt="Modern learning environment" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">Welcome to BrainBuzz Academy</div>
          <h1>Learn from Best Educators</h1>
          <p>Personalized tutoring for classes 1-12. Expert teachers, proven results, affordable pricing.</p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Explore Teachers</span>
            </button>
            <button className="btn-secondary">
              <span>Visit Platform</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>100+</h3>
              <p>Active Students</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Expert Teachers</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
