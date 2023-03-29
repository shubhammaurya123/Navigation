import React from "react";


const Navbar = ()=>{
      return( <div  className="navbar">
                 <ul> 
                     <li> <a href="/createNote"> createNote</a></li>
                      <li><a href="/viewNote">ViewNote</a></li>
                 </ul>
           </div>
       )
}

export default Navbar