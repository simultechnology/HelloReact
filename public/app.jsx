var React = require('react');
var ReactDOM = require('react-dom');
const Greeter = require('Greeter');

var name = 'Simulte';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
);

