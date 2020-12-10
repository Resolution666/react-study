import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginContent from './LoginContent'

 class Login extends Component {
    render() {
        return (
            <div className="container" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <LoginContent  />
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
export default connect(mapStateToProps,{})(Login)