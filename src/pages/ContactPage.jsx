import ContactForm from "../components/ContactForm"
import "./ContactPage.css"

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content grid grid-2">
          {/* Video Section */}
          <div className="video-section">
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="BrainBuzz Academy Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3>About BrainBuzz Academy</h3>
              <p>
                Watch our introduction video to learn more about BrainBuzz Academy's mission to provide quality education to every student.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
