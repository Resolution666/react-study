import React, { Component } from 'react'
import store from "../component/store/createstore"

export default class ReduxDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:store.getState().data
        }
    }
    componentDidMount() {
        
    }
    increment(){
        store.dispatch({type:"INCREMENT"})
        store.subscribe( ()=>{
            this.setState({
                data:store.getState().data
            })
        })
    }
    decrement(){
        store.dispatch({type:"DECREMENT"})
        store.subscribe( ()=>{
            this.setState({
                data:store.getState().data
            })
        })
    }
    
    render() {
        return (
            <div>
                {
                    this.state.data
                }
                <button onClick={this.increment.bind(this)} >+</button>
                <button onClick={this.decrement.bind(this)} >-</button>
            </div>
        )
    }
}
