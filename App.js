import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello Span</span>;
const HeadingComponent = () => {
  return <h1>Hello World</h1>;
};

const TitleComponent = () => {
  return <h2>Title Component</h2>;
};

const ParagraphComponent = () => {
  return (
    <div>
      {100 + 200}
      {elem}
      <HeadingComponent />
      <p>this is Paragraph Component</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <TitleComponent />
    <ParagraphComponent />
  </div>
);
