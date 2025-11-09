"use client"

import { useState, useMemo } from "react"
import TeacherModal from "../components/TeacherModal"
import StyledDropdown from "../components/StyledDropdown"
import CourseData from "../data/courseData"
import "./ExplorePage.css"

function ExplorePage() {
  const [selectedClass, setSelectedClass] = useState("All")
  const [selectedCourse, setSelectedCourse] = useState("All")
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  // Flatten all teachers and courses for filtering
  const allTeachers = useMemo(() => {
    const teachers = []
    Object.values(CourseData).forEach((courses) => {
      Object.values(courses).forEach((course) => {
        course.teachers.forEach((teacher) => {
          if (!teachers.find((t) => t.id === teacher.id)) {
            teachers.push(teacher)
          }
        })
      })
    })
    return teachers
  }, [])

  const classOptions = useMemo(() => {
    return [
      { value: "All", label: "All Classes" },
      ...Object.keys(CourseData).map((cls) => ({ value: cls, label: `Class ${cls}` }))
    ]
  }, [])

  const courseOptions = useMemo(() => {
    let coursesList = []
    if (selectedClass === "All") {
      coursesList = ["All", ...new Set(Object.values(CourseData).flatMap((c) => Object.keys(c)))]
    } else {
      coursesList = ["All", ...Object.keys(CourseData[selectedClass] || {})]
    }
    return coursesList.map((course) => ({
      value: course,
      label: course === "All" ? "All Courses" : course
    }))
  }, [selectedClass])

  // Filter teachers based on selections
  const filteredTeachers = useMemo(() => {
    return allTeachers.filter((teacher) => {
      const teachesSelectedClass = selectedClass === "All" || teacher.classes.includes(selectedClass)
      const teachesCourse = selectedCourse === "All" || teacher.courses.includes(selectedCourse)
      return teachesSelectedClass && teachesCourse
    })
  }, [selectedClass, selectedCourse, allTeachers])

  return (
    <div className="explore-page">
      <div className="container">
        <div className="explore-header">
          <h1>Explore Our Teachers</h1>
          <p>Find the perfect teacher for your learning journey</p>
        </div>

        {/* Filters */}
        <div className="filters">
          <StyledDropdown
            label="Select Class"
            options={classOptions}
            value={selectedClass}
            onChange={(value) => {
              setSelectedClass(value)
              setSelectedCourse("All")
            }}
            placeholder="Select a class"
          />

          <StyledDropdown
            label="Select Course"
            options={courseOptions}
            value={selectedCourse}
            onChange={setSelectedCourse}
            placeholder="Select a course"
          />
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredTeachers.length}</strong> teacher{filteredTeachers.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Teachers Grid */}
        {filteredTeachers.length > 0 ? (
          <div className="grid grid-4">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card-explore" onClick={() => setSelectedTeacher(teacher)}>
                <div className="teacher-image-explore">
                  <img src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
                  <div className="hover-info">
                    <p>Click to view details</p>
                  </div>
                </div>
                <div className="teacher-details">
                  <h4>{teacher.name}</h4>
                  <p className="class-info-explore">Classes: {teacher.classes.join(", ")}</p>
                  <p className="course-info-explore">
                    {teacher.courses.slice(0, 2).join(", ")}
                    {teacher.courses.length > 2 && ` +${teacher.courses.length - 2}`}
                  </p>
                  <p className="qualification-explore">{teacher.qualification}</p>
                  <div className="rating-explore">
                    <span className="stars">{"★".repeat(Math.floor(teacher.rating))}</span>
                    <span className="rating-value">{teacher.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No teachers found for the selected filters. Please try different options.</p>
          </div>
        )}
      </div>

      {selectedTeacher && <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />}
    </div>
  )
}

export default ExplorePage
