import React, { Component } from 'react'
import Navbar from "../NavFoot/Navbar";

export default class RestatuarentCreate extends Component {
    constructor() {
        super();
        this.state={
            name: null,
            address: null,
            email: null,
            rating: null
        }
    }

    create()
    {
        fetch("http://localhost:5000/restaurant",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp) =>{
                alert("Data has been added Successfully.");
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1>Restatuarent Create</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="name">Enter Name</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="name"
                                        onChange={(event)=>{this.setState({name:event.target.value})}} 
                                        placeholder="Restaurant Name" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="address">Enter Address</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="address"
                                        onChange={(event)=>{this.setState({address:event.target.value})}} 
                                        placeholder="Restaurant Address" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="email">Enter Email</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="email"
                                        onChange={(event)=>{this.setState({email:event.target.value})}} 
                                        placeholder="Restaurant Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="rating">Enter Rating</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="rating"
                                        onChange={(event)=>{this.setState({rating:event.target.value})}} 
                                        placeholder="Restaurant Rating" />
                                    </div>
                                </div>
                            </div>

                            <button onClick={()=>{this.create()}}>Add Restaurant</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
