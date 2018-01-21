const React = require('react');

const ActionTypes = require('../ActionTypes');

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { homepage: true };
    }

    render() {
      return (
        <nav >
          <a href='#' onClick={() => {this.props.callAction(HOME, "some_course")}}>Hello</a>
        </nav>
      );
    }
}

module.exports = NavBar;
