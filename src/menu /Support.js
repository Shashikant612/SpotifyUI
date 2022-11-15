import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import "./css.css";

const Support = () => {
  return (
    <div>
      <Nav />
      <div className="pr1">
        <div className="pc2">
          <h2>SPOTIFY SUPPORT</h2>
          <h1>How can we help you?</h1>

          <h3>
            <Link style={{ color: "white" }} to="/signin">
              Log in
            </Link>{" "}
            for faster help
          </h3>
          <input type="search" placeholder="Search"></input>
          <div
            className="cardx2"
            style={{
              display: "flex",
              margin: "20px",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <div className="x3cardx" style={{ display: "flex", margin: "0px" }}>
              <div
                className="smallcard"
                style={{ backgroundColor: "rgb(128, 10, 111)" }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Payment Help
                </p>
                <img className="imagehand" style={{position:"relative",left:"20px",top:"10px",rotate:"25deg",backgroundColor:"rgb(134, 224, 247)",opacity:"0.8"}} src={require("./chand.png")} alt="" />
              </div>
              <div
                className="smallcard"
                style={{ backgroundColor: "rgb(121, 14, 14" }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Plan Help
                </p>
                <img className="imagehand" style={{position:"relative",left:"50px",top:"10px",rotate:"25deg",backgroundColor:"rgb(195, 241, 213)",opacity:"0.8"}} src={require("./penhand.png")} alt="" />
              </div>
              <div
                className="smallcard"
                style={{
                  backgroundColor: "rgb(146, 73, 5)",
                  borderRadius: "0px",
                }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  App Help
                </p>
                <img className="imagehand" style={{position:"relative",left:"50px",top:"10px",rotate:"25deg",backgroundColor:"rgb(87, 201, 115)",opacity:"0.8"}}src={require("./chand.png")} alt="" />
              </div>
            </div>
            <div
              className="x3cardx"
              style={{ display: "flex", margin: "0px", flexWrap: "wrap" }}
            >
              <div
                className="smallcard"
                style={{
                  backgroundColor: "rgb(30, 160, 41)",
                  borderRadius: "0px",
                }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Device Help
                </p>
                <img className="imagehand" style={{position:"relative",left:"35px",top:"10px",rotate:"25deg",backgroundColor:"#333",opacity:"0.8"}} src={require("./phand2.png")} alt="" />
              </div>
              <div
                className="smallcard"
                style={{
                  backgroundColor: "rgb(15, 113, 179)",
                  borderRadius: "0px",
                }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Safety &amp; Privacy
                </p>
                <img className="imagehand" style={{position:"relative",left:"0px",top:"10px",rotate:"25deg",backgroundColor:"pink",opacity:"0.8"}} src={require("./pbrush.png")} alt="" />
              </div>
              <div
                className="smallcard"
                style={{
                  backgroundColor: "rgb(101, 93, 116)",
                  borderRadius: "0px",
                }}
              >
                <p
                  style={{
                    color: "aliceblue",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Account Help
                </p>
                <img className="imagehand" style={{position:"relative",left:"20px",top:"10px",rotate:"25deg",backgroundColor:"rgb(240, 245, 197)",opacity:"0.8"}} src={require("./phone.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* .........x...........x............. */}

        <div id="hpp">
          <h3>Quick help </h3>

          <p>Can't reset password</p>
          <p>My account doesn't look right</p>
          <p>Can't remember login details</p>
          <p>Facebook login help</p>
          <p>Payment methods</p>
          <p>Start or join Family plan</p>
        </div>

        <div className="lastxc2">
          <h2>Visit our Community</h2>
          <p>
            Have questions? Find answers from our worldwide Community of expert
            fans!
          </p>
          <button>Go to Community</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
