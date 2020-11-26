import React, { Component } from 'react'
import qs from "querystring"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(qs.parse(this.props.location.search.slice(1)))
    }
    
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
