const React = require('react');

const CourseInfoView = require('./CourseInfoView.react');

class CourseView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CourseInfoView {...props} />
      </div>
    );
  }
}

module.exports = CourseView;