var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    var message = this.refs.message.value;
    this.refs.message.value = '';
    updates.message = message;

    this.props.onNewName(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><input type="text" ref="name" placeholder="Enter name"/></div>
        <div><textarea ref="message" placeholder="Enter message"></textarea></div>
        <button>Set Name</button>
      </form>
    );
  }
});

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
  handleNewName: function (updates) {
    this.setState(updates);

    //this.props.message = 'something new!'; // not allowed
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var name = 't.ishikawa';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
);

