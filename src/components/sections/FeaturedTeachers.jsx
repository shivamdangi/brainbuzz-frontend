"use client"

import { useState } from "react"
import TeacherModal from "../TeacherModal"
import "./FeaturedTeachers.css"

function FeaturedTeachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  const teachers = [
    {
      id: 1,
      name: "Rajesh Patel",
      class: "10-12",
      subject: "Mathematics",
      qualification: "B.Tech, M.Sc Mathematics",
      experience: "12 years",
      rating: 4.8,
      image: "/math-teacher-male.jpg",
    },
    {
      id: 2,
      name: "Anjali Verma",
      class: "6-9",
      subject: "English",
      qualification: "M.A English, B.Ed",
      experience: "10 years",
      rating: 4.9,
      image: "/english-teacher-female.jpg",
    },
    {
      id: 3,
      name: "Vikram Singh",
      class: "1-5",
      subject: "Science",
      qualification: "B.Sc, B.Ed Science",
      experience: "8 years",
      rating: 4.7,
      image: "/science-teacher-male.jpg",
    },
    {
      id: 4,
      name: "Meera Gupta",
      class: "10-12",
      subject: "Physics",
      qualification: "M.Sc Physics, B.Ed",
      experience: "15 years",
      rating: 4.9,
      image: "/physics-teacher-female.jpg",
    },
  ]

  return (
    <section className="section featured-teachers">
      <div className="container">
        <div className="section-header">
          <h2>Featured Teachers</h2>
          <p>Meet our exceptional educators</p>
        </div>
        <div className="grid grid-4">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card" onClick={() => setSelectedTeacher(teacher)}>
              <div className="teacher-image">
                <img src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
              </div>
              <h4>{teacher.name}</h4>
              <p className="class-info">{teacher.class}</p>
              <p className="subject">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedTeacher && <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />}
    </section>
  )
}

export default FeaturedTeachers
