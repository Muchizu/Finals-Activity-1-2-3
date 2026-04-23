import Navbar from '../components/Navbar'
import BioContent from '../components/BioContent'
import InfoList from '../components/InfoList'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="page">
      <Navbar />
      <div className="section">
        <div className="about-grid">
          <BioContent />
          <InfoList />
        </div>
      </div>
      <SkillsSection />
      <Footer />
    </div>
  )
}
