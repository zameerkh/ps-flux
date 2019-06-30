import React from "react";
import CourseForm from "./CourseForm";
import { Prompt } from "react-router-dom";
const ManageCoursePage = props => {
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm />
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
