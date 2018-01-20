const React = require('react');

const CourseQuizQuestionViewer = require('./CourseQuizQuestionViewer.react');

class CourseQuizQuestionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    switch(this.props.store.getState()['location']) {
      case 'course_quiz_question_viewer':
        return <CourseQuizQuestionViewer {...this.props} />;
      default:
        return <span />;
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

module.exports = CourseQuizQuestionContainer;