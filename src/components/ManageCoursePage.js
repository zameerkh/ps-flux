import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { Prompt } from "react-router-dom";
const ManageCoursePage = props => {
  //use array destructuring and useState hook instead of class component
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    }; //computed property syntax
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
