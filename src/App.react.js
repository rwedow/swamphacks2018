const React = require('react');
const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');
const CoursesView= require('./components/CoursesView.react');

const ActionTypes = require('./ActionTypes');

const FirebaseTest = require('./components/FirebaseTest.react');
const CourseQuizQuestionViewer = require('./components/CourseQuizQuestionViewer.react');


const styles = require('./components/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"a": 1};
  }

  callAction(action, course) {
    console.log('hey here', this.props.store);
    this.props.store.dispatch({type: action, course: course});
    let oppa = this.state.a ? 0 : 1;
    this.setState({"a": oppa});
  }


  renderContent() {
    console.log('load app.react', this.props.store.getState());
    switch (this.props.store.getState()['container']){
      case 'home':
        return (
          <Home {...this.props} callAction={this.callAction.bind(this)} />
        );
      case 'courses_view':
      case 'course_view':
      case 'courses_view_number':
      case 'course_info_view':
      case 'courses_list_view':
      case 'course_reading_view':
      case 'course_quiz_view':
      case 'course_quiz_question_view':
        return (
          <CoursesView {...this.props} callAction={this.callAction.bind(this)} />
        );
      case 'firebaseTest':
      console.log('here');
      return (
          <FirebaseTest />
        );
    }
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} callAction={this.callAction.bind(this)} />
        { /*this.renderContent()*/ }
        <CourseQuizQuestionViewer {...this.props} questionTitle={"Here is a title"} answers={["one", "two"]}/>
      </div>

    );
  }
}

module.exports = App;
