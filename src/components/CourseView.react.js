const React = require('react');

const CourseInfoView = require('./CourseInfoView.react');
const CourseReadingView = require('./CourseReadingView.react');
const CourseQuizView = require('./CourseQuizView.react');

class CourseView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    switch(this.props.store.getState()['container']) {
      case 'course_info_view':
        console.log('here');
        return <CourseInfoView {...this.props} />;
      case 'course_reading_view':
        return <CourseReadingView {...this.props} />;
      case 'course_quiz_view':
      case 'course_quiz_question_view':
        return <CourseQuizView {...this.props} />;
      default:
        return <CourseInfoView {...this.props} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

module.exports = CourseView;