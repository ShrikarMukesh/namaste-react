import React from "react";
import ReactDOM from "react-dom/client";
/*
   Header Component
     -- Logo Component
     -- Menu Component

   Body Component
     -- Search Component
     -- RestaurantContainer
     -- RestaurantCard
       -- Image
       -- Name of Res, Star Rating, Cusines , delivery tie

   Footer Component
     -- Copyright Component
     -- Links Component
     -- Addess Component
     -- Contact Component
*/
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stayleCard = {
  backgroundColor: "gray",
};

const RestaurantCard = (props) => {
  //This called as destrucuring
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={stayleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.0</h4>
      <h4>Delivery Time: 30 min</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resname="Meghna Food" cuisine="North Indian, Asian" />
        <RestaurantCard resname="KFC " cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppLayout />
  </div>
);
