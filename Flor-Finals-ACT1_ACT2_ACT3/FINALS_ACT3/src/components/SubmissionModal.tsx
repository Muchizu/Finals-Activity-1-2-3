type Props = {
  senderName: string
  message: string
  onClose: () => void
}

export default function SubmissionModal({ senderName, message, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">✉️</div>
        <h2>Message Received!</h2>
        <p className="modal-sub">Thanks for reaching out. Here's a summary of your submission.</p>
        <div className="modal-accent-bar" />

        <div className="modal-detail">
          <div className="modal-detail-label">Sender</div>
          <div className="modal-detail-value">{senderName}</div>
        </div>

        <div className="modal-detail">
          <div className="modal-detail-label">Message</div>
          <div className="modal-detail-value">{message}</div>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1.5rem' }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
