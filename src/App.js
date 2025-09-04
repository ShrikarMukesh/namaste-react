import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const stayleCard = {
  backgroundColor: "gray",
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }

],{
    future: {
        v7_startTransition: true,
    }
})
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the React application into the DOM element with id "root"
// The RouterProvider component enables routing using the appRouter configuration
root.render(
    <RouterProvider router={appRouter} />
);
