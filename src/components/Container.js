const React = require('react');

const styles = require('./style.css');

const Container = (props) => {
  return (
    <div className="courseContainer">
      {props.children}
    </div>
  );
};

export default Container;