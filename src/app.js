console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ['One', 'Two']
};

const appTemplate = (
  <div class="app">
    <h1 className="title">{app.title}</h1>
    {app.subtitle && <p className="subtitle">{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: "David",
  age: 29,
  location: "Philadelphia"
};
const getLocation = loc => <p>Location: {loc?loc:'Unknown'}</p>;
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("root");

ReactDOM.render(templateTwo, appRoot);
