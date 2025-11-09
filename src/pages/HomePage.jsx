import Hero from "../components/sections/Hero"
import FounderSection from "../components/sections/FounderSection"
import FeaturedTeachers from "../components/sections/FeaturedTeachers"
import StudentFeedback from "../components/sections/StudentFeedback"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <FounderSection />
      <FeaturedTeachers />
      <StudentFeedback />
    </div>
  )
}

export default HomePage
