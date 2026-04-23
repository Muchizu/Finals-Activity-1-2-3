import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SubmissionModal from './SubmissionModal'

type ContactValues = {
  senderName: string
  message: string
}

export default function ContactForm() {
  const [submission, setSubmission] = useState<ContactValues | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>()

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setSubmission(data)
    reset()
  }

  return (
    <>
      <div className="form-card">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text)' }}>
          Send a Message
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="senderName">Your Name</label>
            <input
              id="senderName"
              type="text"
              placeholder="Juan dela Cruz"
              className={errors.senderName ? 'input-error' : ''}
              {...register('senderName', {
                required: 'Name is required.',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
              })}
            />
            {errors.senderName && (
              <span className="form-error">{errors.senderName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here..."
              className={errors.message ? 'input-error' : ''}
              {...register('message', {
                required: 'Message is required.',
                minLength: { value: 10, message: 'Message must be at least 10 characters.' },
              })}
            />
            {errors.message && (
              <span className="form-error">{errors.message.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      </div>

      {submission && (
        <SubmissionModal
          senderName={submission.senderName}
          message={submission.message}
          onClose={() => setSubmission(null)}
        />
      )}
    </>
  )
}
