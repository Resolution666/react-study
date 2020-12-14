import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginContent from './LoginContent'
import {loginAction} from "../../actions/login"
import {bindActionCreators} from "redux"

 class Login extends Component {
    render() {
        return (
            <div className="container" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <LoginContent {...this.props}  />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        
    }
}

const matDispatchToProps = (dispatch) =>{
    return {
        loginAction:bindActionCreators(loginAction,dispatch)
    }
}
export default connect(mapStateToProps,matDispatchToProps)(Login)