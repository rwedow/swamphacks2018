const React = require('react');

const CoursesViewNavBar = require('./CoursesViewNavBar.react');
const CoursesListView = require('./CoursesListView.react');
const CourseView = require('./CourseView.react');

const ActionTypes = require('../ActionTypes');

class CoursesView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCoursesList() {
    return (
      <div>
        {/* TODO: List out the courses */}
      </div>
    );
  }

  renderCoursesView() {
    switch (this.props.store.getState()['container']) {
      case 'courses_list_view':
        return this.renderCoursesList();
      case 'course_info_view':
      case 'course_view':
      case 'course_reading_view':
      case 'course_quiz_view':
      case 'course_quiz_question_view':
        return <CourseView {...this.props} />;
      default:
        return <span />;
    }
  }

  render() {
    return (
      <div>
        <p>CoursesView</p>
        <CoursesViewNavBar {...this.props} />
        {this.renderCoursesView()}
        <button
          onClick={() => {
            console.log(ActionTypes.COURSE_INFO_VIEW); this.props.callAction(ActionTypes.COURSE_INFO_VIEW, 'dasjhaskkj')}}
        >hey there</button>
      </div>
    );
  }
}

module.exports = CoursesView;