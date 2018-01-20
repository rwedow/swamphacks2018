const React = require('react');

class NavBar extends React.Component {
    state = { homepage: true }

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <nav >
          <a href='#'>Hello</a>
        </nav>
      );
    }
}

module.exports = NavBar;
