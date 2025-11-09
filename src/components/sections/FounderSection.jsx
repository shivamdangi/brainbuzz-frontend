import "./FounderSection.css"

function FounderSection() {
  const founders = [
    {
      id: 1,
      name: "Shivam Kumar",
      role: "Founder & CEO",
      bio: "With 15+ years of experience in education, Shivam is passionate about making quality education accessible to all.",
      image: "/professional-man-teacher.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Co-Founder & Lead Educator",
      bio: "A renowned educator with expertise in curriculum development and student mentoring across all class levels.",
      image: "/professional-woman-teacher.jpg",
    },
  ]

  return (
    <section className="section-alt founder-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Founders</h2>
          <p>Building the future of education with passion and expertise</p>
        </div>
        <div className="grid grid-2">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card card">
              <img src={founder.image || "/placeholder.svg"} alt={founder.name} />
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="bio">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FounderSection
