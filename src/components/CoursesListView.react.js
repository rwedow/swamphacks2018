const React = require('react');

class CourseListView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCourses() {
    // TODO Do fetch request using componentWillMount
    // TODO also do this function
  }

  render() {
    return (
      <div>
        {this.renderCourses()}
      </div>
    );
  }
}