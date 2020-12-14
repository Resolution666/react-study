import React, { Component } from 'react'

export default class LoginContent extends Component {
    constructor(props){
        super(props);
        this.state  = {
            username:"",
            password:"",
            error:{}
        }
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e)=>{   
        e.preventDefault();
        // console.log(this.state)
        this.props.loginAction(this.state).then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className="container" >
                <form onSubmit={this.onSubmit}>
                    <h1>Join our community</h1>
                    <div className="form-group" >
                        <label htmlFor="" className="control-label" >用户名</label>
                        <input 
                            type="text" 
                            name="username"
                            value={this.state.username}  
                            onChange={this.onChange} 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="" className="control-label" >密码</label>
                        <input 
                            type="password" 
                            name="password"
                            value={this.state.password}  
                            onChange={this.onChange} 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group" >
                        <button disabled={this.state.isFormRate} className="btn btn-primary btn-lg" >登录</button>
                    </div>
                </form>
            </div>
        )
    }
}
