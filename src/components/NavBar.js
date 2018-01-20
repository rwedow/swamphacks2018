const React = require('react');

class NavBar extends React.Component {
    constructor(props) {
      // this.state = { homepage: true }
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
