const React = require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'this is react example that is good so far.'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);

    //this.props.message = 'something new!'; // not allowed
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});


module.exports = Greeter;
