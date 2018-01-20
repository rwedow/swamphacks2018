const React = require('react');

const styles = require('./style.css')

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button className="homebutton" onClick={(e) => this.props.onClick()}>
      {this.props.text}
      </button>
    );
  }
}

module.exports = Button;