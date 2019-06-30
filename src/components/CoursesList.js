import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CoursesList(props) {
  function renderRow(course) {
    return (
      <tr key={course.id}>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.deleteCourse(course.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <Link to={"/course/" + course.slug}> {course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{props.courses.map(renderRow)}</tbody>
    </table>
  );
}

CoursesList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};
export default CoursesList;
