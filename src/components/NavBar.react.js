const React = require('react');

const Button = require('./Button.react');

const styles = require('./style.css')

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { homepage: true };
    }

    buttonOnClick() {
      console.log('this is', this);
    }

    render() {
      return (
        <nav>
          <div className="navWide">
            <div className="leftbutton">
              <Button text="FinEd" style="homebutton" {...this.props} onClick={this.buttonOnClick} />
            </div>
            <div className="rightbutton">
              <Button text="Sign Out" style="homebutton" {...this.props} onClick={this.buttonOnClick} />
            </div>
            <div className="rightbutton">
              <Button style="homebutton" text="Sign In" {...this.props} onClick={this.buttonOnClick} />
            </div>
          </div>
        </nav>
      );
    }
}

module.exports = NavBar;
