const React = require('react');

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log("here");
      return (
        <div>
          <h1> NAME OF SITE </h1>
        </div>
      );
    }
}

module.exports = Home;
