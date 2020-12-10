import React, { Component } from "react";
import SignUpContent from "./SignUpContent";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {addAuthActions} from "../../actions/auth"

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
                    <SignUpContent addAuthActions= {this.props.addAuthActions}  />
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }
}

const mapDispatchToActions = (dispatch)=>{
    return{
        addAuthActions:bindActionCreators(addAuthActions,dispatch)
    }
}
export default connect(null,mapDispatchToActions)(SignUp)
