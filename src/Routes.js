
import React from "react";
import { Routes ,BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./menu /signin";
import App from "./App";
import Signup from "./menu /signup";
import Prem from "./menu /prem";
import Support from "./menu /Support";
import Download from "./menu /download";


const routing=(
    
    <Router>

    <Routes>

        <Route path="/" element={<App/>}/>
        <Route path="/signin" to element={<Signin/>}/>
        <Route path="/signup" to element={<Signup/>}/>
        <Route path="/premium" to element={<Prem/>}/>
        <Route path="/support" to element={<Support/>}/>
        <Route path="/download" to element={<Download/>}/>

    </Routes>


    </Router>

    );



export default routing;