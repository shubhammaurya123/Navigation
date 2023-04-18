import React from "react";
import '../App.css'
import {BsChevronDown ,BsChevronUp} from "react-icons/bs"
import logo from "./logo.png"
export function SideNavbar() {
  return (
    <div className="sideNavbar">
           <img src = {logo} alt="logo" className="logo"></img>

           <div>
               <div className="dashboard"> D A S H B O A R D</div>
           </div>

           <ul className="list-style">
              <li className="list-item">Dashboard <BsChevronUp className="arrow"/></li>
              <li className="list-item">Record</li>
              <li className="list-item1">Analysis</li>
              <li className="list-item1">Learn</li>
           </ul>

           <div className="dashboard"> P A G E S</div>
           <ul className="list-style">
              <li className="list-item1">Help Center <BsChevronDown className="arrow"/></li>
              <li className="list-item1">File Manger <BsChevronDown className="arrow"/></li>
           
           </ul>
    </div>
  );
}
