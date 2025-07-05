// Named export will be done in this below way
import { useState } from "react";
import { LOGO_URI } from "../utils/constants";

const Header = () => {
  // This is a local variable, not a state variable
  // It will not cause a re-render when changed
  let btnName = "Login";

  const [btnReactName, setBtnReactName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URI} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnReactName === "Login"
                ? setBtnReactName("Logout")
                : setBtnReactName("Login");
              console.log("Login button clicked");
            }}
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
