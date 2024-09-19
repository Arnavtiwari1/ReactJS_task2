const heading = React.createElement("h1", null, "Welcome to My React Page");

const firstDiv = React.createElement(
  "div",
  null,
  React.createElement("p", null, "This is the first div with a paragraph.")
);

const secondDiv = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "This is the second div with a paragraph and a link."
  ),
  React.createElement(
    "a",
    { href: "https://www.google.co.in/" },
    "Go to google"
  )
);

const thirdDiv = React.createElement(
  "div",
  null,
  React.createElement("p", null, "This is the last div with a paragraph.")
);

const container = React.createElement(
  "div",
  null,
  heading,
  firstDiv,
  secondDiv,
  thirdDiv
);

ReactDOM.render(container, document.getElementById("root"));
