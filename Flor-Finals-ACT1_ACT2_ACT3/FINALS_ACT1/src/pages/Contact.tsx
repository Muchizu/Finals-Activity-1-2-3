import Navbar from '../components/Navbar'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="page">
      <Navbar />
      <div className="section">
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
