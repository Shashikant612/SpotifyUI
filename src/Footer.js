import React from "react";

const Footer=()=>(
    <div>
         <footer className="footer">
          <div className="foot">
   <img className="ximg" src={require("./spotify-logo-png-7069.png")} alt="" srcset=""/>
            <h4>Spotify</h4>
            
          </div>
          <div className="foot"><h4>company</h4>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
            
        </div>
          <div className="foot"><h4>communities</h4>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Investors</p>
            <p>Vendors</p>
            
          </div>
          <div className="foot"><h4>useful links</h4>
            <p>Support</p>
            <p>Web Player</p>
            <p>Free Mobile App</p>
            
          </div>
          <div className="foot">
            <img className="logoimg" src={require("./instagram (1).png")} alt="" srcset=""/>
            <img className="logoimg" src={require("./twitter-sign.png")} alt="" srcset=""/>
            <img className="logoimg" src={require("./facebook-app-symbol.png")} alt="" srcset=""/>
          </div>

        </footer>
        <div className="fxf">
          <div><a href="#s">Legal</a>
            <a href="#s">Privacy Center</a>
            <a href="#s">Privacy Policy</a>
            <a href="#s">Cookies</a>
            <a href="#s">About Ads</a>
          </div>
          <div>
            <p>India</p>
            <p>&#169; 2022 Spotify AB </p>
          </div>
        </div>
   
    </div>
)

export default Footer;

