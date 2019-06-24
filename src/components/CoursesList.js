import React from 'react'
import PropTypes from 'prop-types';

function CoursesList(props)
{
    
  function renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }
    return(
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{props.courses.map(renderRow)}</tbody>
      </table>
    )
}

CoursesList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        authorId : PropTypes.number.isRequired,
        category: PropTypes.string.isRequired

    })).isRequired
}
export default CoursesList