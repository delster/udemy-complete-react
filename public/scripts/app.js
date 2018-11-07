"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "A Udemy course example."
};

var appTemplate = React.createElement(
  "div",
  { "class": "app" },
  React.createElement(
    "h1",
    { className: "title" },
    app.title
  ),
  React.createElement(
    "p",
    { className: "subtitle" },
    app.subtitle
  )
);

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: "David",
  age: 29,
  location: "Philadelphia"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("root");

ReactDOM.render(appTemplate, appRoot);
