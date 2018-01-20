const React = require('react');

const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');

const styles = require('./styles.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: 'home' };
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
        <NavBar {...this.props} />
        { this.renderContent() }
      </div>
    );
  }
}

module.exports = App;
