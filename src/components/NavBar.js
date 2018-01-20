const React = require('react');
const Button = require('./Button');

const styles = require('./style.css')

class NavBar extends React.Component {
    state = { homepage: true }

    constructor(props) {
      // this.state = { homepage: true }
      super(props);
    }

    render() {
      return (
        <nav>
          <div className="navWide">
            <div className="leftbutton">
              <Button text="FinEd"/>
            </div>
            <div className="rightbutton">
              <Button text="Sign Out"/>
            </div>
            <div className="rightbutton">
              <Button text="Sign In"/>
            </div>
          </div>
        </nav>
      );
    }
}

module.exports = NavBar;
