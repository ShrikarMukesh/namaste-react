import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";

const stayleCard = {
  backgroundColor: "gray",
};

const AppLayout = () => {
  return (
    <div>
      <Shimmer />
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppLayout />
  </div>
);
