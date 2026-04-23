const items = [
  { icon: '📧', label: 'Email', value: 'florpatrick@example.com' },
  { icon: '📍', label: 'Location', value: 'Philippines' },
  { icon: '🎓', label: 'Program', value: 'BSIT' },
]

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h2 className="section-title">Get in Touch</h2>
      <div className="divider" />
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
        Have a question or want to collaborate? Feel free to reach out.
      </p>
      {items.map((item) => (
        <div key={item.label} className="contact-item">
          <span className="contact-item-icon">{item.icon}</span>
          <div>
            <div className="contact-item-label">{item.label}</div>
            <div className="contact-item-value">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
