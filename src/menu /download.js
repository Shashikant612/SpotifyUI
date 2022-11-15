import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./css.css";



const Download=()=>{
    return(
        <div>
            <Nav/>
            <div className="pr1" >
                <div className="hero1">
                   <img src={require("./laptop.png")} style={{height:"120px",width:"180px"}} alt=""></img>
                <h1>Download Spotify</h1>
                <p>Play millions of songs and podcasts on your device.</p>
                <button>Download</button>
                    
                   
                    
                    
                    
                </div>
                <div id="hero2">
                    <h1>Bring your music to mobile and tablet, too.</h1>
                    <p>Listening on your phone or tablet is free, easy, and fun."</p>
                    <div className="hh22" style={{display:"flex" ,}}>
                        <img src={require("./apple.png")} alt=""></img>
                        <img src={require("./gplay.png")} alt=""></img>
                        <img src={require("./micro.png")} alt=""></img>
                    </div>
                
                 



                </div>

                <div id="hero3" >
                <div className="devx">
                       <img className="popox" id="popo1" src={require("./lptop.png")} alt=""></img>
                       <img className="popox" id="popo2" src={require("./monitor.png")} alt=""></img>
                       <img className="popox" id="popo3" src={require("./console.png")} alt=""></img>
                       <img className="popox" id="popo4" src={require("./speaker.png")} alt=""></img>
                       <img className="popox" id="popo5" src={require("./phone.png")} alt=""></img>
                       <img className="popox" id="popo6" src={require("./car.png")} alt=""></img>
                      
                   </div>
                   
                     <h1>One account, listen everywhere.</h1>
                     
                    <div>
                        <ul>
                            <li>MOBILE</li>
                            <li>COMPUTER</li>
                            <li>TABLET</li>
                            <li>CAR</li>
                            <li>PLAYSTATION®</li>
                            <li>XBOX</li>
                            <li>TV</li>
                            <li>SPEAKER</li>
                            <li>WEB</li>
                            <li>PLAYER</li>
                        </ul>
                        
                    </div>
                   
                </div>
                
                

            </div>
            <Footer/>
        </div>
    )
}

export default Download;