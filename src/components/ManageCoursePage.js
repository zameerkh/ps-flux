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

  function handleTitleChange(event) {
    // const updatedCourse = { ...course }; //spread operator copies the course
    // updatedCourse.title = event.target.value;
    const updatedCourse = { ...course, title: event.target.value }; //concise syntax
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
