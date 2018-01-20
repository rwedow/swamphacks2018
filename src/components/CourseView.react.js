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
    this.state = {curView: INFO_VIEW};
  }

  setNewView(newView) {
    switch(newView) {
      case INFO_VIEW:
        this.setState({curView: newView});
        break;
      case READING_VIEW:
        this.setState({curView: newView});
        break;
      case QUIZ_VIEW:
        this.setState({curView: newView});
        break;
      default:
        this.setState({curView: INFO_VIEW});
    }
  }

  renderView() {
    switch(this.state.curView) {
      case INFO_VIEW:
        return <CourseInfoView {...props} />;
      case READING_VIEW:
        return <CourseReadingView {...props} />;
      case QUIZ_VIEW:
        return <CourseQuizView {...props} />;
      default:
        return <CourseInfoView {...props} />;
    }
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