const React = require('react');
const styles = require('./style.css')

class CourseQuizQuestionViewer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
      <h3>Course Name Module #</h3>
        <div className="flexbox-container">
          <div>
            <h4>{this.props.questionTitle}</h4>
            {this.props.answers.forEach((index, val) => {
              console.log(index, val);
              return <h5>{val}</h5>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = CourseQuizQuestionViewer;
