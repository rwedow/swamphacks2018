const React = require('react');

const Button = require('./Button.react');

const ActionTypes = require('../ActionTypes');

const styles = require('./style.css')

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      console.log('props', this.props);
      this.state = { homepage: true };
    }

    buttonOnClick() {
      console.log(this.props);
      this.props.callAction(ActionTypes.HOME, "some_course");
    }

    render() {
      return (
        <nav>
          <div className="navWide">
            <div className="leftbutton">
              <Button text="FinEd" style="homebutton" {...this.props} onClick={() => {this.props.callAction(ActionTypes.HOME, "some_course")}} />
            </div>
            <div className="rightbutton">
              <Button text="Sign Out" style="homebutton" {...this.props} onClick={this.buttonOnClick} />
            </div>
            <div className="rightbutton">
              <Button text="Sign In" style="homebutton" {...this.props} onClick={this.buttonOnClick} />
            </div>
          </div>
        </nav>
      );
    }
}

module.exports = NavBar;
