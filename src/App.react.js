const React = require('react');
const NavBar = require('./components/NavBar')

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