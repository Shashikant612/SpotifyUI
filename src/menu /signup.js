import React from "react";
import Nav from "../Nav";
// import Hero from "./Hero";
import Footer from "../Footer"
import "./css.css"
import { Link } from "react-router-dom";


const Signup=()=>(
    <div>
        <Nav/>
        <div className="signxh1" style={{display:"flex",flexDirection:"column"}}>
        <div className="l1">
            <p style={{color:"black",fontWeight:"bold",fontSize:"35px"}}>Sign up for free to start listening.</p>
        <button style={{backgroundColor:"rgb(25, 103, 210)"}}><ion-icon style={{paddingRight:"30px"}} name="logo-facebook"></ion-icon>Continue with Facebook </button>
                <button style={{backgroundColor:"white",color:"grey"}}><ion-icon style={{paddingRight:"70px"}} name="logo-google"></ion-icon>Continue with Google </button>
                </div>
                <br/>
                    <br/>
                <div style={{width:"400px",display:"flex"}}>
                <hr style={{ height:"0.5px",width:"200px",position:"relative",top:"10px"}}/><span style={{color:"grey",letterSpacing:"4px"}}>or</span>
                
                <hr style={{ height:"0.5px",width:"200px",position:"relative",top:"10px"}}/>

                </div>

                 

        </div>
        
            <div className="bx9" style={{marginRight:"0px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",backgroundColor:"aliceBlue"}}>
            <br/>
            <br/>
            <div className="bx9">
                <div className="login1" style={{marginLeft:"20%",marginRight:"15%"}}>
                    
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>What's your email?</label><br/><input type="text" placeholder="Enter your email." /><p style={{fontSize:"14px",color:"green",letterSpacing:"1px",textDecoration:"underline",curson:"pointer",marginTop:"0px"}}>Use phone number instead.</p>
                    <br/>
                    <br/>
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>Confirm your email</label><br/><input type="text" placeholder="Enter your email again." /><br/>
                    <br/>
                    <br/>
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>Create a password</label><br/><input type="password" placeholder="Create a password." /><br/>
                    <br/>
                    <br/>
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>What should we call you?</label><br/><input type="password" placeholder="Enter a profile name." /><p style={{fontSize:"14px",color:"black",letterSpacing:"0.5px",marginTop:"0px"}}>This appears on your profile.</p>
                    <br/>
                    <br/>
                    <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>What's your date of birth?</label><br/><input type="date"  />
                    <br/>
                    <br/>

                    {/* <label style={{color:"black",fontWeight:"bold",paddingTop:"30px"}}>What's your gender?</label><br/>
                    <input type="radio" name="gender" value="male"/>Male
                    <br/>
                    <input type="radio" name="gender" value="male"/>Female */}
                    

         {/* ......x...........x......... */}
                    <div >
                        <input style={{height:"13px",width:"13px",marginRight:"10px"}} type="checkbox"/><span>I would prefer not to receive marketing messages from Spotify</span>
                        </div>
                    <div >
                        <input style={{height:"13px",width:"13px",marginRight:"10px"}} type="checkbox"/><span>Share my registration data with Spotify's content providers for marketing purposes.</span>
                        </div>
                    <div style={{width:"200px",fontFamily:"sans-serif"}} >
                        <input style={{height:"20px",width:"20px",marginRight:"10px"}} type="checkbox"/><label>I'm not a robot</label><ion-icon style={{marginLeft:"40px"}} name="man-sharp"></ion-icon>
                        </div>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                        <p style={{overflow: "initial",fontSize:"15px",color:"grey" }}>
                        By clicking on sign-up, you agree to Spotify's<span style={{textDecoration:"underline",color:"green"}}> Terms and conditions of use.</span></p>
                        <p style={{overflow: "initial",fontSize:"15px",color:"grey" }}>
                        To learn more about how Spotify collects, uses, shares and protects your personal data, please see<span style={{textDecoration:"underline",color:"green"}}> Spotify's Privacy Policy.</span></p>
                        <br/>
                    <button style={{fontFamily:"arial",fontWeight:"bold",borderRadius:"40px",width:"200px",height:"60px"}}>Sign up</button>

                    <br/>
                    <p style={{color:"#333",fontFamily:"sans-serif",fontSize:"20px",marginBottom:"40px",letterSpacing:"2px"}}>Have an account?<Link to="/signin"><span style={{color:"green",marginLeft:"10px"}}>login</span></Link></p>
                    
                        </div>
                    
                </div>
                </div>







           
            

        </div>
      
        <Footer/>
   
    </div>
)

export default Signup;

