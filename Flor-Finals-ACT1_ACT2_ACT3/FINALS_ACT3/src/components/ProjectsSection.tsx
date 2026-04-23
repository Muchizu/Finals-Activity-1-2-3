const projects = [
  { icon: '🛒', title: 'E-Commerce Platform', desc: 'Full-stack shopping app with cart, auth, and payment integration.' },
  { icon: '📋', title: 'Task Manager', desc: 'Productivity app with drag-and-drop boards and real-time updates.' },
  { icon: '📊', title: 'Data Dashboard', desc: 'Analytics dashboard with interactive charts and filters.' },
]

export default function ProjectsSection() {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-sub">A few things I've built</p>
      <div className="divider" />
      <div className="cards-grid">
        {projects.map((p) => (
          <div key={p.title} className="card">
            <div className="card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
