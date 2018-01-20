const React = require('react');
const NavBar = require('./components/NavBar')

const styles = require('./styles.css')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
  }

  renderContent() {
    switch (this.state.location){
      case 'home':
      return (
        <Home />
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

module.exports = App;
