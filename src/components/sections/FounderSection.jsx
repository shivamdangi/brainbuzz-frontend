import "./FounderSection.css"

function FounderSection() {
  const founders = [
    {
      id: 1,
      name: "Ms. Zeba",
      role: "For Spoken English & Grammar",
      bio: (
        <>
          <span><b>Holds an M.A. in English, B.Ed., and M.Ed., with 15 years of rich teaching experience.</b></span><br />
          <span><b>Highly skilled in training students in Spoken English and mastering grammar with ease.</b></span><br />
          <span>Passionate about making language learning interactive, confident, and enjoyable for every student.</span>
        </>
      ),
      image: "/professional-woman-teacher.jpg", // You can later replace with a real image
    }
  ]

  return (
    <section className="section-alt founder-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Founder</h2>
          <p>Expert in Spoken English, Grammar, and Interactive Teaching</p>
        </div>
        <div className="founder-container">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card card">
              <div className="founder-image">
                <img src={founder.image || "/placeholder.svg"} alt={founder.name} />
              </div>
              <div className="founder-content">
                <h3>{founder.name}</h3>
                <p className="role">{founder.role}</p>
                <p className="bio">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FounderSection
