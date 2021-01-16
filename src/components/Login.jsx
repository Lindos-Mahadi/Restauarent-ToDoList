import React, { Component } from 'react'
import Navbar from "../NavFoot/Navbar";

export default class Login extends Component {
    constructor() {
        super();
        this.state={
            name:"",
            password:"",
        }
    }
    login()
    {
        console.warn(this.state);
        fetch("http://localhost:5000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }
                else {
                    alert("Pelase check username and password")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <h1>User Login Form</h1>
                                <div className="form-group row">
                                    <input type="text" className="form-control" name="user"
                                    placeholder="User Name" 
                                    onChange={(event)=>this.setState({name:event.target.value})} />
                                </div>
                                <div className="form-group row">
                                    <input type="password" className="form-control" name="password"
                                    placeholder="User Password" 
                                    onChange={(event)=>this.setState({password:event.target.value})} />
                                </div>
                                <div className="form-group row">
                                    <button onClick={() => { this.login() }} className="btn btn-primary">Login</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
