import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  )
}
