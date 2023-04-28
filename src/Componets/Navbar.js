import React from "react";
import "../App.css";
import {BsBell ,BsBagDash} from "react-icons/bs"
import {RxDashboard} from "react-icons/rx"
const Navbar = () => {
  return (
    <div className="navbar">
         <span> <a href="/addfood">AddFood</a></span>
         <span> <a href="/viewfood">ViewFood</a></span>
    </div>
   
  );
};

export default Navbar;
