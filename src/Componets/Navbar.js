import React from "react";
import "../App.css";
import {BsBell ,BsBagDash} from "react-icons/bs"
import {RxDashboard} from "react-icons/rx"
const Navbar = () => {
  return (
    <div className="navbar">
        <input  type ="text" className="searchbar" placeholder="Search...."></input>
        <BsBell className="icon"/>
        <BsBagDash className="icon"/>
        <RxDashboard className="icon"/>
    </div>
   
  );
};

export default Navbar;
