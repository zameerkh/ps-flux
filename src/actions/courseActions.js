import dispatcher from "../AppDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
//Action creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses // use object short hand syntax and remove RHS if need be
    });
  });
}
