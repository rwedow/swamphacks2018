const React = require('react');

const CourseQuizStartView = require('./CourseQuizStartView.react');
const CourseQuizFinalView = require('./CourseQuizFinalView.react');

class CourseQuizStatusContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    switch(this.props.store.getState()['location']) {
      case 'course_quiz_start_view':
        return <CourseQuizStartView {...this.props} />;
      case 'course_quiz_final_view':
        return <CourseQuizFinalView {...this.props} />;
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

module.exports = CourseQuizStatusContainer;