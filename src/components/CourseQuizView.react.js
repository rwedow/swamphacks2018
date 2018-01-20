const React = require('react');

const CourseQuizQuestionContainer = require('./CourseQuizQuestionContainer.react');
const CourseQuizStatusContainer = require('./CourseQuizStatusContainer.react');

const QUESTION_CONTAINER = 'QuestionContainer';
const STATUS_CONTAINER = 'StatusContainer';

class CourseQuizView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    switch(this.props.store.getState()['location']) {
      case 'course_quiz_question_container':
      case 'course_quiz_question_view':
        return <CourseQuizQuestionContainer {...this.props} />;
      case 'course_quiz_status_container':
      case 'course_quiz_start_view':
      case 'course_quiz_final_screen':
        return <CourseQuizStatusContainer {...this.props} />;
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

module.exports = CourseQuizView;