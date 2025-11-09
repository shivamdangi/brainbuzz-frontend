"use client"
import { useEffect } from "react"
import { X } from "lucide-react"
import "./TeacherModal.css"

function TeacherModal({ teacher, onClose }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal" type="button">
          <X size={24} />
        </button>
        <div className="modal-content grid grid-2">
          <div className="modal-image">
            <img src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
          </div>
          <div className="modal-info">
            <h2>{teacher.name}</h2>
            <div className="info-item">
              <span className="label">Class</span>
              <p>{teacher.class}</p>
            </div>
            <div className="info-item">
              <span className="label">Subject</span>
              <p>{teacher.subject}</p>
            </div>
            <div className="info-item">
              <span className="label">Qualification</span>
              <p>{teacher.qualification}</p>
            </div>
            <div className="info-item">
              <span className="label">Experience</span>
              <p>{teacher.experience}</p>
            </div>
            <div className="rating-display">
              <span>Rating: </span>
              <span className="stars">{"★".repeat(Math.floor(teacher.rating))}</span>
              <span>{teacher.rating}</span>
            </div>
            {/* <button className="btn-primary" style={{ width: "100%", marginTop: "var(--spacing-lg)" }}>
              Book Session
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherModal
