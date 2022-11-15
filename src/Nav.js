import React from "react";
import "./Style.css";
import {Link} from "react-router-dom"



const Nav=()=>(
    <div>
        <div className="nav" >
            <div className="logo">
              <Link to="/"> <img src={require("./spotify-logo-png-7069.png")} height="120px" width="120px" alt="" srcset=""/></Link>
            </div>
            <div className="list">
            <Link to="/premium">Premium</Link>
            &emsp;
            &emsp;
            <Link to="/support">Support</Link>
            &emsp;
            &emsp;
            <Link to="/download">Download</Link>
            {/* <h2 style="color: aliceblue; display: inline-block; margin-left:20px;margin-right: -20px; ">|</h2> */}
            &emsp;
            &emsp;
            <Link to="/signup">Sign up</Link>
            &emsp;
            &emsp;
            <Link to="/signin"> Sign In</Link>
          
            &emsp;
            &emsp;
            &emsp;
            <input type="search" placeholder="Search Song" name="" id="" />
            </div>
        

        </div>
   
    </div>
)

export default Nav;

