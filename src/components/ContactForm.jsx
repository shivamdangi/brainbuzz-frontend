"use client"

import { useState } from "react"
import "./ContactForm.css"

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data using EmailJS or Formspree
      // For now, we'll use Formspree as a simple solution
      const response = await fetch("https://formspree.io/f/xyzlgnkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _to: "shivamdangi039@gmail.com",
        }),
      })

      // Alternative: Log data for demonstration (since we can't directly send emails from frontend)
      console.log("Form submitted:", formData)

      setSubmitMessage("Thank you for your message! We will get back to you soon.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send us a Message</h3>

      {submitMessage && (
        <div className={`submit-message ${submitMessage.includes("Thank") ? "success" : "error"}`}>{submitMessage}</div>
      )}

      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn-primary" style={{ width: "100%" }} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="form-note">
        <strong>Note:</strong> The contact form is set up for demonstration. To enable email functionality, configure
        Formspree or EmailJS with your email address.
      </p>
    </form>
  )
}

export default ContactForm
