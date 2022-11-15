import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./css.css";

const Prem = () => {
  return (
    <div>
      <Nav />
      <div className="pr1">
        <div id="pr">
          <h1>Introducing Premium Mini</h1>
          <h3>1$ for 3 day</h3>
          <h3>3$ for 10 day</h3>
          <div id="bbb">
            <button className="bb2"> Get Mini</button>
            <button className="bb2" id="cc2">
              See other PLANS
            </button>
          </div>
          <p style={{ fontSize: "12px", textDecoration: "underline" }}>
            Terms and conditions apply.
          </p>
        </div>
        {/* ........x............................. */}
        <div className="mh2">
          <h1>Get Premium free for 1 month</h1>
          <h4>
            Just ₹119/month after. Debit and credit cards accepted. Cancel
            anytime.
          </h4>

          <button className="mh2bt">GET STARTED</button>
          <p>
            <p id="termx">Terms and conditions apply.</p> 1 month free not
            available for users who have already tried Premium.
          </p>
        </div>

        {/*......... ..........x............ */}

        <div className="he3">
          <h1>The power of Premium</h1>
          <div className="he01">
            <div className="he01x1">
              <div>
                <img src={require("./logo/app.png")} alt="" />
              </div>
              <div>
                <p>Ad-free music listening</p>
                <p>Enjoy uninterrupted music.</p>
              </div>
            </div>

            <div className="he01x1">
              <div>
                <img src={require("./logo/download.png")} alt="" />
              </div>
              <div>
                <p>Offline playback</p>
                <p>Save your data by listening offline.</p>
              </div>
            </div>

            <div className="he01x1">
              <div>
                <img src={require("./logo/musicv.png")} alt="" />
              </div>
              <div>
                <p>Play everywhere</p>
                <p>Listen on your speakers, TV, and other favorite devices.</p>
              </div>
            </div>

            <div className="he01x1">
              <div>
                <img src={require("./logo/mvideo.png")} alt="" />
              </div>
              <div>
                <p>Pay your way</p>
                <p>Prepay with Paytm, UPI, and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ..............................x................. */}
        <div id="prem1hero">
          <h1
            style={{
              marginTop: "10px",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Listen to your favorite Artist
          </h1>

          <div className="cardop" style={{ display: "flex" }}>
            <div className="card1">
              <div className="c7">
                <img className="ci1" src={require("./ts1.jpg")} alt="" />
                <h2>Taylor Swift</h2>
              </div>
            </div>
            <div className="card1">
              <div className="c7">
                <img className="ci1" src={require("./ed1.jpeg")} alt="" />
                <h2>Ed Sheeran</h2>
              </div>
            </div>
            <div className="card1">
              <div className="c7">
                <img className="ci1" src={require("./jb1.jpeg")} alt="" />
                <h2>Justin Bieber</h2>
              </div>
            </div>
          </div>
        </div>

        {/* ..................x...............hero3 prem......x............................. */}
        <div  style={{  backgroundColor: "aliceblue",display:"flex",flexDirection:"column" }}>
        <div><h1 style={{fontFamily:"arial",fontSize:"40px",fontWeight:"bolder",marginTop:"50px"}}>Pick your Premium</h1></div>
        <div style={{margin:"auto",fontFamily:"arial",fontSize:"20px",fontWeight:"bold",padding:"20px"}} ><h3>Listen without limits on your phone, speaker, and other devices.</h3></div>
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"} }>
 {/* ................................................            */}
          <div className="copp2x"
            style={{
              width: "250px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p style={{ color: "white",backgroundColor:"rgb(81, 186, 218)",fontSize:"12px",width:"100px",padding:"5px",fontWeight:"bold" }}>4 months free</p>
            <p className="pbo01" style={{ color: "black" }}>One-time plans available</p>
            <p style={{ color: "black",fontSize:"25px",fontWeight:"bolder" }}>Individual</p>
            <p style={{ color: "black" }}>
              ₹119/month after offer period 1 account
            </p>
            <br />
            <hr />
            <p style={{ color: "black" }}>Ad-free music listening</p>
            <p style={{ color: "black" }}>Group Session</p>
            <p style={{ color: "black" }}>Download 10k songs/device on 5 devices</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <button>VIEW PLANS</button>
            <div style={{ textAlign: "justify" }}>
              <p style={{overflow: "initial",fontSize:"12px",color:"grey" }}>
              <span style={{textDecoration:"underline"}}> Terms and conditions apply.</span> 4 month free not available for users
                who have already tried Premium.
              </p>
            </div>
          </div>
          {/* ...................x............. */}
          <div className="copp2x"
            style={{
              width: "250px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            
            <p className="pbo01" style={{color:"black",backgroundColor:"aliceblue"}} >One-time plans available</p>
            <p style={{ color: "black",fontSize:"25px",fontWeight:"bolder" }}>Mini</p>
            <p style={{ color: "black" }}>From ₹7/day</p>
            <p style={{ color: "black" }}>
            1 account on mobile only
            </p>
            <br />
            <hr />
            <p style={{ color: "black" }}>Ad-free music listening on mobile</p>
            <p style={{ color: "black" }}>Group Session</p>
            <p style={{ color: "black" }}>Download 30 songs on 1 mobile device</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <button >VIEW PLANS</button>
            <div style={{ textAlign: "justify" }}>
              <p style={{overflow: "initial",fontSize:"12px",color:"grey" }}>
              <span style={{textDecoration:"underline"}}> Terms and conditions apply.</span>
              </p>
            </div>
          </div>
          {/* ...................x.............. */}
          <div className="copp2x"
            style={{
              width: "250px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p style={{ color: "white",backgroundColor:"rgb(81, 186, 218)",fontSize:"12px",width:"100px",padding:"5px",fontWeight:"bold" }}>1 months free</p>
            <p className="pbo01" style={{ color: "black" }}>One-time plans available</p>
            <p style={{ color: "black",fontSize:"25px",fontWeight:"bolder" }}>Duo</p>
            <p style={{ color: "black" }}>
            ₹149/month after offer period 2 accounts
            </p>
            <br />
            <hr />
            <p style={{ color: "black" }}>For couples who live together</p>
            <p style={{ color: "black" }}>Ad-free music listening</p>
            <p style={{ color: "black" }}>Group Session</p>
            <p style={{ color: "black" }}>Download 10k songs/device, on 5 devices per account</p>
            <br/>
            <br/>
            
            <button>VIEW PLANS</button>
            <div style={{ textAlign: "justify" }}>
              <p style={{overflow: "initial",fontSize:"12px",color:"grey" }}>
              <span style={{textDecoration:"underline"}}> Terms and conditions apply.</span> 1 month free not available for users
                who have already tried Premium.
              </p>
            </div>
          </div>
          {/* ...............x................... */}
          <div className="copp2x"
            style={{
              width: "250px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p style={{ color: "white",backgroundColor:"rgb(81, 186, 218)",fontSize:"12px",width:"100px",padding:"5px",fontWeight:"bold" }}>1 months free</p>
            <p className="pbo01" style={{ color: "black" }}>One-time plans available</p>
            <p style={{ color: "black",fontSize:"25px",fontWeight:"bolder" }}>Family</p>
            <p style={{ color: "black" }}>
              ₹179/month after offer period Up to 6 account
            </p>
            <br />
            <hr />
            <p style={{ color: "black" }}>For family who live together</p>
            <p style={{ color: "black" }}>Block explicit music</p>
            <p style={{ color: "black" }}>Ad-free music listening</p>
            <p style={{ color: "black" }}>Group Session</p>
            <p style={{ color: "black" }}>Download 10k songs/device on 5 devices</p>
            <button>VIEW PLANS</button>
            <div style={{ textAlign: "justify" }}>
              <p style={{overflow: "initial",fontSize:"12px",color:"grey" }}>
               <span style={{textDecoration:"underline"}}> Terms and conditions apply.</span> 1 month free not available for users
                who have already tried Premium.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prem;
