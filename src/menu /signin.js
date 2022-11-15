import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./css.css";
import { Link } from "react-router-dom";

const Signin=()=>{
    return(
        <div>
            <Nav/>
            <div className="contn" style={{ height:"1100px" }}>
                <div className="l1">
                <p style={{color:"black",fontWeight:"bold",fontSize:"15px"}}>To continue, log in to Spotify.</p>
                <button style={{backgroundColor:"rgb(25, 103, 210)"}}><ion-icon style={{paddingRight:"30px"}} name="logo-facebook"></ion-icon>Continue with Facebook </button>
                <button style={{backgroundColor:"rgb(29, 30, 31)"}}><ion-icon style={{paddingRight:"70px"}} name="logo-apple"></ion-icon>Continue with Apple</button>
                <button style={{backgroundColor:"white",color:"grey"}}><ion-icon style={{paddingRight:"70px"}} name="logo-google"></ion-icon>Continue with Google </button>
                <button style={{backgroundColor:"white",color:"grey"}}><ion-icon style={{paddingRight:"15px"}} name="phone-portrait-outline"></ion-icon>Continue with Phone Number </button>
                </div>
                <br/>
                <br/>
                <hr/>
                <hr/>
                <br/>
                <br/>
                <br/>
                <div className="bx9">
                <div className="login1">
                    
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>Email adress or username</label><br/><input type="text" placeholder="Username" /><br/>
                    <br/>
                    <br/>
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>Password</label><br/><input type="password" placeholder="Password" />
                    <br/>
                    <br/>
                    <p style={{color:"black",fontWeight:"bold"}}>Forgot your Password?</p>
                    <button style={{fontFamily:"arial",fontWeight:"bold",borderRadius:"40px",width:"400px",height:"60px"}}>Log In</button>
                    
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <hr/>
                <hr/>
                <br/>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p style={{fontFamily:"arial",color:"black",fontWeight:"bold",fontSize:"20px"}}>Don't have an account?</p>
                    <Link to="/signup"><button style={{backgroundColor:"white",fontFamily:"arial",border:"3px solid grey",borderRadius:"40px",width:"400px",height:"60px"}}>SIGN UP FOR SPOTIFY</button></Link>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Signin;