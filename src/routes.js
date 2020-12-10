import React from "react";
import App from "./components/App"
import {Route} from "react-router-dom"
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

export default (
    <div className='container' >
        <Route exact component={App} path="/"></Route>
        <Route exact component={Login} path="/login"></Route>
        <Route exact component={SignUp} path="/signup"></Route>
    </div>
)