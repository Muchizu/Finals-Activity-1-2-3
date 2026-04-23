import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const themeTaglines: Record<string, string> = {
  midnight: 'Building clean, purposeful web experiences.',
  emerald: 'Growing through code, one project at a time.',
  solarized: 'Clarity in design. Precision in code.',
}

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section className="hero">
      <span className="hero-badge">BSIT Student · Developer</span>
      <h1>Flor Patrick Dae</h1>
      <p>{themeTaglines[theme]}</p>
      <div className="hero-cta">
        <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        <Link to="/about" className="btn btn-primary">About Me</Link>
      </div>
    </section>
  )
}
