const React = require('react');

const CourseInfoView = require('./CourseInfoView.react');

const CourseReadingView = require('./CourseReadingView.react');
const CourseQuizView = require('./CourseQuizView.react');

const INFO_VIEW = 'INFO_VIEW';
const READING_VIEW = 'READING_VIEW';
const QUIZ_VIEW = 'QUIZ_VIEW';


class CourseView extends React.Component {
  constructor(props) {
    super(props);

  }

  renderView() {
    switch(this.props.store.getState()['location']) {
      case 'course_info_view':
        return <CourseInfoView {...this.props} />;
      case 'course_reading_view':
        return <CourseReadingView {...this.props} />;
      case 'course_quiz_view':
      case 'course_quiz_question_container':
      case 'course_quiz_question_view':
      case 'course_quiz_status_container':
      case 'course_quiz_start_view':
      case 'course_quiz_final_screen':
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