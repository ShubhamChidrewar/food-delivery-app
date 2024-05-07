import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement(
  "div",
  { className: "container" },
  [
    React.createElement("h1", { id: "title" }, "Heading"),
    React.createElement("p", { className: "desc" }, "This is description"),
  ],
  React.createElement("div", { className: "container" }, [
    React.createElement("h1", { id: "title" }, "Heading"),
    React.createElement("p", { className: "desc" }, "This is description"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
