import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import { loadCourses } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  useEffect(() => {
    courseStore.addChangeListner(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListner(onChange); //cleanup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

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
