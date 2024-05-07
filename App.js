const Parent = React.createElement(
  "div",
  { class: "container" },
  [
    React.createElement("h1", { id: "title" }, "Heading"),
    React.createElement("p", { class: "desc" }, "This is description"),
  ],
  React.createElement("div", { class: "container" }, [
    React.createElement("h1", { id: "title" }, "Heading"),
    React.createElement("p", { class: "desc" }, "This is description"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
