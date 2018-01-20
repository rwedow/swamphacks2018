const React = require('react');

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { homepage: true };
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
