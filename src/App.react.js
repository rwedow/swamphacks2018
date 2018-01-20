const React = require('react');

const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');
const CoursesViewContainer = require('./components/CoursesViewContainer.react');

const styles = require('./styles.css');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    switch (this.props.store.getState()['location']){
      case 'home':
        return (
          <Home {...this.props} />
        );
      case 'courses_view_container':
      case 'courses_view':
      case 'course_view_container':
      case 'course_view':
      case 'courses_view_number':
      case 'course_info_view':
      case 'courses_list_view':
      case 'course_reading_view':
      case 'course_quiz_view':
      case 'course_quiz_question_container':
      case 'course_quiz_question_view':
      case 'course_quiz_status_container':
      case 'course_quiz_start_view':
      case 'course_quiz_final_screen':
        return (
          <CoursesViewContainer {...this.props} />
        );
    }
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        { this.renderContent() }
      </div>
    );
  }
}

module.exports = App;
