'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js!'
);
var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);
