// Named export will be done in this below way
import { useState, useEffect } from "react";
import { LOGO_URI } from "../utils/constants";

const Header = () => {
  // This is a local variable, not a state variable It will not cause a re-render when changed
  let btnName = "Login";

  const [btnReactName, setBtnReactName] = useState("Login");
  console.log("header render");
  // if no dependency array => useEffect is called on every render,
  // if dependency array empty = [] => useEffect is called on initial render(just once)
  // if dependency array is called on everytime update
  useEffect(() =>{
      console.log("useEffect called")
  }, [])
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
