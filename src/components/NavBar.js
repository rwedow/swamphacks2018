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

  const styles = {
    navStyle: {
      backgroundColor: 'red',
      padding: 0,
      background: 'transparent'
    }
  };
  
  module.exports = NavBar;