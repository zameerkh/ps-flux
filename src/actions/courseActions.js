import dispatcher from "../AppDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
//Action creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //Hey dispatcher, go tell all stores that a course was just created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
