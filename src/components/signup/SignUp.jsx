import React, { Component } from "react";
import SignUpContent from "./SignUpContent";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {addAuthActions,isAuthActions} from "../../actions/auth"
import {addMessageAction} from "../../actions/message"

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignUpContent {...this.props}  />
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

const mapDispatchToActions = (dispatch)=>{
    return{
        addAuthActions:bindActionCreators(addAuthActions,dispatch),
        addMessageAction:bindActionCreators(addMessageAction,dispatch),
        isAuthActions:bindActionCreators(isAuthActions,dispatch),
    }
}
export default connect(null,mapDispatchToActions)(SignUp)
