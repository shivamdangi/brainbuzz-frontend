// Comprehensive course and teacher database for classes 1-12
const CourseData = {
  1: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["1", "2", "3"],
          courses: ["English", "Hindi", "EVS"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
        {
          id: 102,
          name: "Rajesh Kumar",
          classes: ["1", "2", "3", "4"],
          courses: ["English", "Mathematics"],
          qualification: "B.A, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 103,
          name: "Priya Singh",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["Mathematics", "Reasoning"],
          qualification: "B.Sc Math, B.Ed",
          experience: "9 years",
          rating: 4.8,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
    EVS: {
      teachers: [
        {
          id: 104,
          name: "Vikram Patel",
          classes: ["1", "2", "3"],
          courses: ["EVS", "Science"],
          qualification: "B.Sc, B.Ed",
          experience: "7 years",
          rating: 4.6,
          image: "/science-teacher-male.jpg",
        },
      ],
    },
  },
  2: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["1", "2", "3"],
          courses: ["English", "Hindi", "EVS"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 103,
          name: "Priya Singh",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["Mathematics", "Reasoning"],
          qualification: "B.Sc Math, B.Ed",
          experience: "9 years",
          rating: 4.8,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
    Hindi: {
      teachers: [
        {
          id: 105,
          name: "Meera Sharma",
          classes: ["2", "3", "4", "5", "6"],
          courses: ["Hindi", "Sanskrit"],
          qualification: "M.A Hindi, B.Ed",
          experience: "11 years",
          rating: 4.7,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
  },
  3: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["1", "2", "3"],
          courses: ["English", "Hindi", "EVS"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 103,
          name: "Priya Singh",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["Mathematics", "Reasoning"],
          qualification: "B.Sc Math, B.Ed",
          experience: "9 years",
          rating: 4.8,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 104,
          name: "Vikram Patel",
          classes: ["1", "2", "3"],
          courses: ["EVS", "Science"],
          qualification: "B.Sc, B.Ed",
          experience: "7 years",
          rating: 4.6,
          image: "/science-teacher-male.jpg",
        },
      ],
    },
  },
  4: {
    English: {
      teachers: [
        {
          id: 102,
          name: "Rajesh Kumar",
          classes: ["1", "2", "3", "4"],
          courses: ["English", "Mathematics"],
          qualification: "B.A, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 103,
          name: "Priya Singh",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["Mathematics", "Reasoning"],
          qualification: "B.Sc Math, B.Ed",
          experience: "9 years",
          rating: 4.8,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 104,
          name: "Vikram Patel",
          classes: ["1", "2", "3", "4", "5", "6"],
          courses: ["EVS", "Science"],
          qualification: "B.Sc, B.Ed",
          experience: "7 years",
          rating: 4.6,
          image: "/science-teacher-male.jpg",
        },
      ],
    },
  },
  5: {
    English: {
      teachers: [
        {
          id: 102,
          name: "Rajesh Kumar",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["English", "Mathematics"],
          qualification: "B.A, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 103,
          name: "Priya Singh",
          classes: ["1", "2", "3", "4", "5"],
          courses: ["Mathematics", "Reasoning"],
          qualification: "B.Sc Math, B.Ed",
          experience: "9 years",
          rating: 4.8,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 104,
          name: "Vikram Patel",
          classes: ["1", "2", "3", "4", "5", "6"],
          courses: ["EVS", "Science"],
          qualification: "B.Sc, B.Ed",
          experience: "7 years",
          rating: 4.6,
          image: "/science-teacher-male.jpg",
        },
      ],
    },
  },
  6: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["6", "7", "8", "9"],
          courses: ["English", "Hindi"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 106,
          name: "Arun Joshi",
          classes: ["6", "7", "8", "9", "10"],
          courses: ["Mathematics", "Geometry"],
          qualification: "M.Sc Math, B.Ed",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 107,
          name: "Neha Sinha",
          classes: ["6", "7", "8", "9"],
          courses: ["Science", "Biology"],
          qualification: "M.Sc Science, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
  },
  7: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["6", "7", "8", "9"],
          courses: ["English", "Hindi"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 106,
          name: "Arun Joshi",
          classes: ["6", "7", "8", "9", "10"],
          courses: ["Mathematics", "Geometry"],
          qualification: "M.Sc Math, B.Ed",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 107,
          name: "Neha Sinha",
          classes: ["6", "7", "8", "9"],
          courses: ["Science", "Biology"],
          qualification: "M.Sc Science, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
  },
  8: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["6", "7", "8", "9"],
          courses: ["English", "Hindi"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 106,
          name: "Arun Joshi",
          classes: ["6", "7", "8", "9", "10"],
          courses: ["Mathematics", "Geometry"],
          qualification: "M.Sc Math, B.Ed",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 107,
          name: "Neha Sinha",
          classes: ["6", "7", "8", "9"],
          courses: ["Science", "Biology"],
          qualification: "M.Sc Science, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
  },
  9: {
    English: {
      teachers: [
        {
          id: 101,
          name: "Anjali Verma",
          classes: ["6", "7", "8", "9"],
          courses: ["English", "Hindi"],
          qualification: "M.A English, B.Ed",
          experience: "10 years",
          rating: 4.9,
          image: "/english-teacher-female.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 106,
          name: "Arun Joshi",
          classes: ["6", "7", "8", "9", "10"],
          courses: ["Mathematics", "Geometry"],
          qualification: "M.Sc Math, B.Ed",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 107,
          name: "Neha Sinha",
          classes: ["6", "7", "8", "9"],
          courses: ["Science", "Biology"],
          qualification: "M.Sc Science, B.Ed",
          experience: "8 years",
          rating: 4.7,
          image: "/professional-woman-teacher.jpg",
        },
      ],
    },
  },
  10: {
    English: {
      teachers: [
        {
          id: 108,
          name: "Deepak Sharma",
          classes: ["10", "11", "12"],
          courses: ["English", "Literature"],
          qualification: "M.A English, B.Ed",
          experience: "13 years",
          rating: 4.9,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 109,
          name: "Rajesh Patel",
          classes: ["10", "11", "12"],
          courses: ["Mathematics", "Algebra", "Calculus"],
          qualification: "B.Tech, M.Sc Mathematics",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Science: {
      teachers: [
        {
          id: 110,
          name: "Meera Gupta",
          classes: ["10", "11", "12"],
          courses: ["Science", "Physics", "Chemistry", "Biology"],
          qualification: "M.Sc Physics, B.Ed",
          experience: "15 years",
          rating: 4.9,
          image: "/physics-teacher-female.jpg",
        },
      ],
    },
  },
  11: {
    English: {
      teachers: [
        {
          id: 108,
          name: "Deepak Sharma",
          classes: ["10", "11", "12"],
          courses: ["English", "Literature"],
          qualification: "M.A English, B.Ed",
          experience: "13 years",
          rating: 4.9,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 109,
          name: "Rajesh Patel",
          classes: ["10", "11", "12"],
          courses: ["Mathematics", "Algebra", "Calculus"],
          qualification: "B.Tech, M.Sc Mathematics",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Physics: {
      teachers: [
        {
          id: 110,
          name: "Meera Gupta",
          classes: ["10", "11", "12"],
          courses: ["Physics", "Mechanics", "Optics"],
          qualification: "M.Sc Physics, B.Ed",
          experience: "15 years",
          rating: 4.9,
          image: "/physics-teacher-female.jpg",
        },
      ],
    },
  },
  12: {
    English: {
      teachers: [
        {
          id: 108,
          name: "Deepak Sharma",
          classes: ["10", "11", "12"],
          courses: ["English", "Literature"],
          qualification: "M.A English, B.Ed",
          experience: "13 years",
          rating: 4.9,
          image: "/professional-man-teacher.jpg",
        },
      ],
    },
    Mathematics: {
      teachers: [
        {
          id: 109,
          name: "Rajesh Patel",
          classes: ["10", "11", "12"],
          courses: ["Mathematics", "Algebra", "Calculus"],
          qualification: "B.Tech, M.Sc Mathematics",
          experience: "12 years",
          rating: 4.8,
          image: "/math-teacher-male.jpg",
        },
      ],
    },
    Physics: {
      teachers: [
        {
          id: 110,
          name: "Meera Gupta",
          classes: ["10", "11", "12"],
          courses: ["Physics", "Mechanics", "Optics"],
          qualification: "M.Sc Physics, B.Ed",
          experience: "15 years",
          rating: 4.9,
          image: "/physics-teacher-female.jpg",
        },
      ],
    },
  },
}

export default CourseData
