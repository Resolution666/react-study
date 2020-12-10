import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NavLink extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
               <div className="container" >
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item" >
                           <Link className="nav-link"  to="/login"  >登录</Link>
                       </li>
                       <li className="nav-item" >
                           <Link className="nav-link" to="signup" >注册</Link>
                       </li>
                   </ul>
               </div>
            </nav>
        )
    }
}
