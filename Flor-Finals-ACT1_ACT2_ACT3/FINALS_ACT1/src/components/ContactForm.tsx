import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Send a Message</h3>
      {sent ? (
        <p style={{ color: '#a78bfa' }}>✅ Message sent! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Juan dela Cruz" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="juan@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="Write your message here..." required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
