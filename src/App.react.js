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
        <h1 className="primary">Hello World!</h1>
      </div>
    );
  }
}

module.exports = App;