import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'
import {delMessageAction} from "../../actions/message"
class Message extends Component {
    render() {
        return (
            <div className="container" >
                {
                    this.props.messagelist.map((item,index)=>(
                        <MessageList message={item} key={index} delMessageAction ={this.props.delMessageAction} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messagelist:state.message
})

export default connect(mapStateToProps, {delMessageAction})(Message);
