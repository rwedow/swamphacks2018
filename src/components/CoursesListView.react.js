const React = require('react');

const styles = require('./style.css');

const Container = require('./Container');

class CoursesListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {finlit: 'beginner'};
  }

  renderCourses() {
    // TODO Do fetch request using componentWillMount
    // TODO also do this function
     switch (this.state.finlit) {
       case 'beginner':
        return (
          <div className="courseContainer">
            <div className="bigTitle">
              <p>What would you like to learn about?</p>
            </div>
          </div>
        );
      default:
        return (
          <div/>
        );
     }
  }

  render() {
    return (
      <div>
        {this.renderCourses()}
      </div>
    );
  }
}

module.exports = CoursesListView;