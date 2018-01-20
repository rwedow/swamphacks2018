const React = require('react');

const CoursesViewNavBar = require('./CoursesViewNavBar.react');
const CoursesListView = require('./CoursesListView.react');
const CourseView = require('./CourseView.react');

const COURSES_LIST_VIEW = 'CoursesListView';
const COURSE_VIEW = 'CourseView';
const firebase = require('../firebase');


class CoursesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourseView: COURSES_LIST_VIEW,
      currentCourse: null,
      courses: []
    };
  }

  componentDidMount() {
    /* Fetch the courses from the database and populate the courses state array with titles */
    const coursesRef = firebase.database().ref('courses');
    coursesRef.on('value', (snapshot) => {
      let courses = snapshot.val();
      let newState = [];
      for (let course in courses) {
        newState.push({
          id: course,
          title: courses[course].title
        });
      }
      this.setState({
        courses: newState
      });
    });
  }

  setCoursesView(newView, newCourse) {
    this.setState({
      currentCourseView: newView,
      currentCourse: newCourse
    });
  }

  renderCoursesView() {
    switch (this.props.store.getState()['location']) {
      case 'courses_list_view':
        return <CoursesListView {...this.props} />;
      case 'course_view':
      case 'course_reading_view':
      case 'course_quiz_view':
      case 'course_quiz_question_container':
      case 'course_quiz_question_view':
      case 'course_quiz_status_container':
      case 'course_quiz_start_view':
      case 'course_quiz_final_screen':
        return <CourseViewContainer {...this.props} />;
      default:
        return <CoursesListView {...this.props} />;
    }
  }

  render() {
    return (
      <div>
      <h2>What would you like to learn about?</h2>
      <ul>
        {this.state.courses.map((course) => {
          return (
            <li key={course.id}>
              <h3>{course.title}</h3>
            </li>
          )
        })}
      </ul>
        {/*<CoursesViewNavBar {...props} />
        {this.renderCoursesView()}-->*/}
      </div>
    );
  }
}

module.exports = CoursesView;