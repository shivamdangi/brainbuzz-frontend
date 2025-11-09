import "./StudentFeedback.css"

function StudentFeedback() {
  const feedbacks = [
    {
      id: 1,
      name: "Arjun Kumar",
      class: "12",
      feedback: "The teaching quality is exceptional. I improved my math scores from 65 to 92 in just 6 months!",
      rating: 5,
      image: "/student-male.jpg",
    },
    {
      id: 2,
      name: "Sneha Desai",
      class: "10",
      feedback: "Best tutoring experience ever. Teachers are highly qualified and very patient with students.",
      rating: 5,
      image: "/student-female.jpg",
    },
    {
      id: 3,
      name: "Rahul Nair",
      class: "9",
      feedback: "Personalized attention and structured learning helped me understand concepts better.",
      rating: 4,
      image: "/student-boy.jpg",
    },
  ]

  return (
    <section className="section-alt student-feedback">
      <div className="container">
        <div className="section-header">
          <h2>Student Success Stories</h2>
          <p>Hear from our happy students</p>
        </div>
        <div className="grid grid-3">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-card card">
              <div className="feedback-header">
                <img src={feedback.image || "/placeholder.svg"} alt={feedback.name} className="student-avatar" />
                <div>
                  <h4>{feedback.name}</h4>
                  <p className="class-badge">Class {feedback.class}</p>
                </div>
              </div>
              <div className="rating">
                {"★".repeat(feedback.rating)}
                <span className="empty">{"☆".repeat(5 - feedback.rating)}</span>
              </div>
              <p className="feedback-text">{feedback.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentFeedback
