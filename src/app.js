console.log('App.js is running!');

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>David Elster</h1>
    <p>Age: 29</p>
    <p>Location: Philadelphia</p>
  </div>
);

var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);