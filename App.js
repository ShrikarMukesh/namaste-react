import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am child tage"),
    React.createElement("h1", {}, "I am child tage"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React Render!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("test"));

root.render(heading);
root.render(parent);
