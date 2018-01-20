const React = require('react');

const CourseQuizQuestionView = require('./CourseQuizQuestionViewer.react');

class CourseQuizView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    // TODO: Querying for the data
    return <CourseQuizQuestionViewer {...this.props} />;
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