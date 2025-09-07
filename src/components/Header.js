// Named export will be done in this below way
import {useState, useEffect} from "react";
import {LOGO_URI} from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    // This is a local variable, not a state variable It will not cause a re-render when changed
    let btnName = "Login";

    const [btnReactName, setBtnReactName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    console.log("header render");
    // if no dependency array => useEffect is called on every render,
    // if dependency array empty = [] => useEffect is called on initial render(just once)
    // if dependency array is called on everytime update
    useEffect(() => {
        console.log("useEffect called")
    }, [])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URI}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us </Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us </Link>
                    </li>
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
