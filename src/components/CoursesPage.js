import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(courseStore.getCourses());
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CoursesList courses={courses} />
    </>
  );
}

export default CoursesPage;
