const React = require('react');

const CoursesView = require('./CoursesView.react');

class CoursesViewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CoursesView {...props} />
      </div>
    );
  }
}

module.exports = CoursesViewContainer;