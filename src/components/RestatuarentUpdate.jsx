import React, { Component } from 'react'
import Navbar from "../NavFoot/Navbar";

export default class RestatuarentUpdate extends Component {
    constructor() {
        super();
        this.state={
            name: null,
            address: null,
            email: null,
            rating: null,
            id: null
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/restaurant/"+this.props.match.params.id).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        this.setState({
            name: result.name,
            address: result.address,
            email: result.email,
            rating: result.rating,
            id:result.id
        })
      });
    });
    }
    update()
    {
        fetch("http://localhost:5000/restaurant/"+this.state.id,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp) =>{
                alert("Data has been Updated Successfully.");
            })
        })
    }
    render() {
        // console.warn(this.state);
        return (
            <div>
                <Navbar />
                <h1>Restatuarent Update</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="name">Enter Name</label>
                                </div>
                                <div className="col-lg-8">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="name"
                                        onChange={(event)=>{this.setState({name:event.target.value})}} 
                                        value={this.state.name}
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
                                        value={this.state.address}
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
                                        value={this.state.email}
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
                                        value={this.state.rating}
                                        placeholder="Restaurant Rating" />
                                    </div>
                                </div>
                            </div>

                            <button onClick={()=>{this.update()}}>Update Restaurant</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
