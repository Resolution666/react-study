import React, { Component } from 'react'
import classnames from "classnames"

class MessageList extends Component {
    onClick = ()=>{
        this.props.delMessageAction(this.props.message.id)
    }
    render() {
        const { type,text }  = this.props.message;
        return (
            <div className={ classnames('alert',{
                'alert-success' : type ==='success',
                'alert-danger' :type === 'danger'
            })}>
                <button onClick={ this.onClick } className="close">&times;</button>
                { text }
            </div>
        )
    }
}


export default MessageList
