import React from "react";
import '../App.css'

const Navbar = ()=>{
      return( <div  className="navbar">
                 
                     <span><a href="/"> Home</a></span>
                     <span> <a href="/AddFood"> AddFood</a></span>
                      <span><a href="/ViewFood">ViewFood</a></span>
                 
           </div>
       )
}

export default Navbar