import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { Prompt } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
  const [errors, setErros] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  //use array destructuring and useState hook instead of class component
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListner(onChange);
    const slug = props.match.params.slug; // from path /courses:slug
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
    return () => courseStore.removeChangeListner(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    // destructuring to make concise . See above
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "category is required";
    setErros(_errors);

    //Form is valid if the erros object has no properties
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
    </>
  );
};

export default ManageCoursePage;
