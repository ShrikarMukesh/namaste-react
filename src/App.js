import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

const stayleCard = {
  backgroundColor: "gray",
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contactus",
        element: <ContactUs />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the React application into the DOM element with id "root"
// The RouterProvider component enables routing using the appRouter configuration
root.render(
    <RouterProvider router={appRouter} />
);

