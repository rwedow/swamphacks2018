const React = require('react');
const Button = require('./Button.react');

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    buttonOnClick() {
      console.log('this is', this);
    }

    render() {
      document.title = "Home";
      return (
        <div>
          <div className="webHeader">
            <div className="bigTitle">
              <h1>Get to know your <span>finances</span></h1>
            </div>
          </div>
          <div className="subTitle">
            <p>This is where we talk about the quiz and Luke will fill it in later. Wallet and cash interest and money.</p>
          </div>

          <div className="centerButton">
            <Button text="Take the Quiz" style="centerButton" onClick={this.buttonOnClick} />
          </div>
          
          <div className="discreteButton">
            <Button text="Learn More" style="discreteButton" onClick={this.buttonOnClick} />
          </div>
        </div>
      );
    }
}

module.exports = Home;
