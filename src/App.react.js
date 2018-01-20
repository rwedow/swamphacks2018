const React = require('react');
const NavBar = require('./components/NavBar')
const Home = require('./components/Home.react')
const styles = require('./styles.css')

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
    console.log("hey there");
    return (
      <div>
        <NavBar />
        { this.renderContent() }
      </div>
    );
  }
}

module.exports = App;
