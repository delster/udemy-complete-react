console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "A Udemy course example."
};

var appTemplate = (
  <div class="app">
    <h1 className="title">{app.title}</h1>
    <p className="subtitle">{app.subtitle}</p>
  </div>
);

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

var user = {
  name: "David",
  age: 29,
  location: "Philadelphia"
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("root");

ReactDOM.render(appTemplate, appRoot);
