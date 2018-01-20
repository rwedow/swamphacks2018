const React = require('react');
const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');
const CoursesView= require('./components/CoursesView.react');

const styles = require('./components/style.css');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  callAction(action, course) {
    console.log('hey here', this.props.store);
    console.log(action, typeof action);
    this.props.store.dispatch({type: action, course: course});
  }

  renderContent() {
    switch (this.props.store.getState()['container']){
      case 'home':
        return (
          <Home {...this.props} />
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
          <CoursesView {...this.props} />
        );
    }
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        {/* { this.renderContent() } */}
        <CoursesView callAction={this.callAction.bind(this)} {...this.props} />
      </div>
    );
  }
}

module.exports = App;
