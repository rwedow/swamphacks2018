const React = require('react');
const firebase = require('firebase');
const NavBar = require('./components/NavBar.react');
const Home = require('./components/Home.react');
const FirebaseTest = require('./components/FirebaseTest.react');

const styles = require('./styles.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: 'home'};
  }


  renderContent() {
    switch (this.state.location){
      case 'home':
        return (
          <Home />
        );
      case 'firebaseTest':
      return (
          <FirebaseTest />
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
