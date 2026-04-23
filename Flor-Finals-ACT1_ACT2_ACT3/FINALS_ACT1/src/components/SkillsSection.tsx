const skills = [
  'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3',
  'Git', 'REST APIs', 'MySQL', 'Tailwind CSS', 'Vite',
]

export default function SkillsSection() {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-sub">Technologies I work with</p>
      <div className="divider" />
      <div className="skills-grid">
        {skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </div>
  )
}
