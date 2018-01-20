const React = require('react');

const styles = require('./style.css')

class Button extends React.Component {
  handleClick() {
    console.log('this is: ', this);
  }
  
  render() {
    return (
      <button className="homebutton" onClick={(e) => this.handleClick(e)}>
      {this.props.text}
      </button>
    );
  }
}

module.exports = Button;