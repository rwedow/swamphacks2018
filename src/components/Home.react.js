const React = require('react');

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      document.title = "Home";
      return (
        <div>
          <div className="webHeader">
            <div className="bigTitle">
              <h1>Get to know your finances</h1>
            </div>
          </div>
          <div className="subTitle">
            <p>This is where we talk about the quiz and Luke will fill it in later. Wallet and cash interest and money.</p>
          </div>
        </div>
      );
    }
}

module.exports = Home;
