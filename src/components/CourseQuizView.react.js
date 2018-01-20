const React = require('react');

const CourseQuizQuestionContainer = require('./CourseQuizQuestionContainer.react');
const CourseQuizStatusContainer = require('./CourseQuizStatusContainer.react');

const QUESTION_CONTAINER = 'QuestionContainer';
const STATUS_CONTAINER = 'StatusContainer';

class CourseQuizView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {curView: STATUS_CONTAINER};
  }

  render() {
    return (
      <div>
        <span />;
      </div>
    );
  }
}

module.exports = CourseQuizView;