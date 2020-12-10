import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
 class SignUpContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            rePassword:"",
            isFormRate:false,
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
        console.log(this.state)
        this.setState({
            error:{},
            isFormRate:true
        })
        this.props.addAuthActions(this.state).then((res)=>{
            console.log(res)
            if(!res.data.isValids){
                this.setState({
                    error:res.data.errors,
                    isFormRate:false
                },()=>{
                    
                })
            }else{
                this.props.addMessageAction({type:"success",text:`欢迎你的加入`})
                this.props.history.push("/")
            }
        }).catch((res)=>{
            console.log(res)
        })
    }
    isUsername = (e)=>{
        this.props.isAuthActions(e.target.value).then((res)=>{
            console.log(res)
            if(res.data.flag){
                this.setState({
                    isFormRate:false,
                    error:{}
                })
            }else{
                this.setState({
                    error:{username:res.data.text},
                    isFormRate:true
                })
            }
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
                            onBlur={this.isUsername}  
                            onChange={this.onChange} 
                            className="form-control"
                        />
                       { this.state.error.username && <span className={"form-text text-muted"} >{this.state.error.username}</span> }
                    </div>
                    <div className="form-group" >
                        <label htmlFor="" className="control-label" >邮箱</label>
                        <input 
                            type="email" 
                            name="email"
                            value={this.state.email}  
                            onChange={this.onChange} 
                            className="form-control"
                        />
                        { this.state.error.email && <span className={"form-text text-muted"} >{this.state.error.email}</span> }
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
                        { this.state.error.password && <span className={"form-text text-muted"} >{this.state.error.password}</span> }
                    </div>
                    <div className="form-group" >
                        <label htmlFor="" className="control-label" >再次输入密码</label>
                        <input 
                            type="password" 
                            name="rePassword"
                            value={this.state.rePassword}  
                            onChange={this.onChange} 
                            className="form-control"
                        />
                        { this.state.error.rePassword && <span className={"form-text text-muted"} >{this.state.error.rePassword}</span> }
                    </div>
                    <div className="form-group" >
                        <button disabled={this.state.isFormRate} className="btn btn-primary btn-lg" >注册</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpContent)
