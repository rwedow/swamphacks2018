const React = require('react');

class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <nav style={styles.navStyle}>
          <a href='#'>Hello</a>
        </nav>
      );
    }
}

module.exports = NavBar;