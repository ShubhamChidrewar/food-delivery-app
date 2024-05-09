import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Heading = () => <h1>This is JSX Heading</h1>;

// React Functional Component

function HeadingComp() {
  return <h3>This is nomal function component</h3>;
}

// Component Composition --> One compoent in another one
const HeadingComponent = () => {
  return (
    <div>
      <Heading />
      <HeadingComp />
      {2 + 2}
      <h1>This is Heading from Functional Component</h1>
    </div>
  );
};

function HeadingComp() {
  return <h3>This is nomal function component</h3>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
