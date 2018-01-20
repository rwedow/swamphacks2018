const React = require('react');

const CoursesViewNavBar = require('./CoursesViewNavBar.react');
const CoursesListView = require('./CoursesListView.react');
const CourseView = require('./CourseView.react');

const COURSES_LIST_VIEW = 'CoursesListView';
const COURSE_VIEW = 'CourseView';

class CoursesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourseView: COURSES_LIST_VIEW,
      currentCourse: null
    };
  }

  setCoursesView(newView, newCourse) {
    this.setState({
      currentCourseView: newView,
      currentCourse: newCourse
    });
  }

  renderCoursesView() {
    switch (this.state.currentCourseView) {
      case COURSES_LIST_VIEW:
        return <CoursesListView />;
      case COURSE_VIEW:
        return <CourseView />;
      default:
        return <CoursesListView />;
    }
  }

  render() {
    return (
      <div>
        <CoursesViewNavBar {...props} />
        {this.renderCoursesView()}
      </div>
    );
  }
}

module.exports = CoursesView;