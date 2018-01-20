const React = require('react');
const Button = require('./Button.react');

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    buttonOnClick() {
      console.log('this is', this);
    }

    learnButtonOnClick() {
      console.log('this is', this);
      document.querySelector('.learn').scrollIntoView({ 
        behavior: 'smooth' 
      });
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
          <div /*className="centerButton"*/>
            <Button text="Take the Quiz" style="centerbutton" onClick={this.learnButtonOnClick} />
          </div>
          <div id="end" className="learn">
            <h1>Hello</h1>
          </div>
        </div>
      );
    }
}

module.exports = Home;
