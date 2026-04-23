import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero">
      <span className="hero-badge">BSIT Student · Developer</span>
      <h1>Flor Patrick Dae</h1>
      <p>
        Building clean, purposeful web experiences. Passionate about technology,
        problem-solving, and continuous learning.
      </p>
      <div className="hero-cta">
        <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        <Link to="/about" className="btn btn-primary">About Me</Link>
      </div>
    </section>
  )
}
