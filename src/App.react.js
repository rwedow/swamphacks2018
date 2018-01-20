const React = require('react');
const NavBar = require('./components/NavBar')

const styles = require('./styles.css')

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

module.exports = App;