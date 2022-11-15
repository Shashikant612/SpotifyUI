import React from "react";

import "./Style.css";



const Hero=()=>{
    return(
    <div>
        
        <div className="hero">
            <div className="slide">
              <div className="container">
                <input type="radio" name="slider" id="item-1" checked/>
                <input type="radio" name="slider" id="item-2"/>
                <input type="radio" name="slider" id="item-3"/>
              <div className="cards">
                <label className="card" for="item-1" id="song-1">
                  <img src={require("./vd.avif")} alt="song"/>
                </label>
                <label className="card" for="item-2" id="song-2">
                  <img src={require("./cc.avif")} alt="song"/>
                </label>
                <label className="card" for="item-3" id="song-3">
                  <img src={require("./aa.avif")} alt="song"/>
                </label>
              </div>
              <div className="player">
                <div className="upper-part">
                  <div className="play-icon">
                    <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
                      <defs/>
                      <path d="M5 3l14 9-14 9V3z"/>
                    </svg>
                  </div>
                  <div className="info-area" id="test">
                    <label className="song-info" id="song-info-1">
                      <div className="title">Bunker</div>
                      <div className="sub-line">
                        <div className="subtitle">Balthazar</div>
                        <div className="time">4.05</div>
                      </div>
                    </label>
                    <label className="song-info" id="song-info-2">
                      <div className="title">Words Remain</div>
                      <div className="sub-line">
                        <div className="subtitle">Moderator</div>
                        <div className="time">4.05</div>
                      </div>
                    </label>
                    <label className="song-info" id="song-info-3">
                      <div className="title">Falling Out</div>
                      <div className="sub-line">
                        <div className="subtitle">Otzeki</div>
                        <div className="time">4.05</div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="progress-bar">
                  <span className="progress"></span>
                </div>
              </div>
            </div>
            </div>

                


        <div className="login">
             <div className="fo" >
                <h1>Sign In</h1>
                <input className="formx" type="text" placeholder="Email or Phone Number"/><br/>
                <input className="formx" type="password" placeholder="Password"/><br/>
                <button className="btn" > Log In </button><br/>&emsp;
                <h4>or</h4>

                <button className="btn" ><ion-icon name="logo-google"></ion-icon> Google Sign In</button>
                
             </div>

                
            </div>

        </div>
   
    </div>
    
)
}

export default Hero;

