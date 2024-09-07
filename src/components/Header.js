import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux'; // Correct import path

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login"); // Eventhough its a const variable, when it is set for update, btnNameReact will be treated as new Variable in React .
  console.log(" Header render ");
  // CASE 1 : if no dependency array => useEffect is called on every Render .
  //  CASE 2 : if the dependency Array  is empty => useEffect is called on only initial  render and just once .
  //  CASE 3 : if the dependency Array  is NOT empty  => useEffect will only be called when the dependency changes .
  // If depency array is [btnNameReact], then  it is called everytime btnNameReact is Updated .
  // useEffect(() => {
  //   console.log("useEffect is called as u can observe yeyy hihihihi hahahaha ");
  // }, [btnNameReact]) ; 

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // Selector
  //  We are subscribing to the store using  a Selector .
  // const cartItems = useSelector((store) => store.cart.items); 

  const cartItems = useSelector((store) => store.cart.items) ; 
  console.log(cartItems) ; 

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg sm:bg-purple-300 lg:bg-slate-400">
      <div className="logo-container">
        <img className="w-60" alt="App Logo" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex  p-4 m-4">
          <li className="px-8">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-8">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-8">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-8">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-8 font-bold  text-xl">
           <Link to="/cart"> Cart- ({cartItems.length} items){" "}</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
