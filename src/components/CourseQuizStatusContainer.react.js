const React = require('react');

const CourseQuizStartView = require('./CourseQuizStartView.react');
const CourseQuizFinalView = require('./CourseQuizFinalView.react');

class CourseQuizStatusContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span />
      </div>
    );
  }
}

module.exports = CourseQuizStatusContainer;