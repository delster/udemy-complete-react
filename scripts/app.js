console.log('App.js is running!');

var template = React.createElement(
  "h1",
  { id: "someid" },
  "Something new"
);
var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);