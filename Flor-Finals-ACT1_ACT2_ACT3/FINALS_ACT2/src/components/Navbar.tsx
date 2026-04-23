import { NavLink } from 'react-router-dom'
import { useTheme, Theme } from '../context/ThemeContext'

const themes: { id: Theme; label: string }[] = [
  { id: 'midnight', label: 'Midnight' },
  { id: 'emerald', label: 'Emerald' },
  { id: 'solarized', label: 'Solarized' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="navbar">
      <span className="navbar-brand">FPD.</span>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="theme-switcher" title="Switch theme">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-btn ${t.id} ${theme === t.id ? 'active' : ''}`}
              onClick={() => setTheme(t.id)}
              title={t.label}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
