const React = require('react');
const CoursesViewContainer = require('./components/CoursesViewContainer.react');
const firebase = require('firebase');
const firebaseui = require('firebaseui');
const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');
const FirebaseTest = require('./components/FirebaseTest.react');
const CoursesView = require('./components/CoursesView.react');

const styles = require('./components/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: 'courses_view'};
  }


  renderContent() {
    switch (this.props.store.getState()['location']){
      case 'home':
        return (
          <Home {...this.props} />
        );
      case 'courses_view_container':
      case 'courses_view':
        return (
          <CoursesView {...this.props}/>
        );
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
      case 'firebaseTest':
      return (
          <FirebaseTest />
        );
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {/*{ this.renderContent() }-->*/}
        <CoursesView />
      </div>

    );
  }
}

module.exports = App;
