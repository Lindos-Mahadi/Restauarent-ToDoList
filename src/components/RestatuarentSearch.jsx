import React, { Component } from 'react'
import {Link} from "react-router-dom";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from "../NavFoot/Navbar";

export default class RestatuarentSearch extends Component {
    constructor() {
        super();
        this.state={
            searchData:null,
            nodata:false,
            lastSearch:"",
        }
    }
    search(key)
    {
        console.warn(key);
        this.setState({lastSearch:key})
        fetch("http://localhost:5000/restaurant?q=" + key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp", resp);
                if (resp.length>0) {
                    this.setState({searchData:resp, nodata:false})
                }
                else
                {
                    this.setState({nodata:true, searchData:null})
                }
            })
        })
    }
    delete(id)
  {
    fetch("http://localhost:5000/restaurant/"+id,
    {
      method: "DELETE"
    }).then((result)=>{
      result.json().then((resp) =>{
          alert("Data has been Deleted Successfully.");
          this.search(this.state.lastSearch);
      })
  })
  }
    render() {
        return (
            <div>
                <Navbar />
                <h1>Restatuarent Search</h1>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <input type="text" className="form-control" placeholder="Search Your Fevourite Item" onChange={(event)=>this.search(event.target.value)}/>
                                <br/>
                            </div>
                        </div>
                        <div>
                        {
                        this.state.searchData?
                            <div>
                                <table className="table table-striped bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>NAME</th>
                                            <th>ADDRESS</th>
                                            <th>EMAIL</th>
                                            <th>RATING</th>
                                            <th>OPERATIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                {
                                    
                                    this.state.searchData.map((item, i)=> 
                                    <tr>
                                        <td>{i}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>
                                            <Link to={"/update/"+item.id}><LoyaltyIcon style={{color:"orange"}} /></Link>
                                            <Link onClick={()=>this.delete(item.id)}><DeleteIcon style={{color:"red"}} /></Link>
                                        </td>
                                    </tr>
                                    )
                                }
                                    </tbody>
                                </table>
                            </div> :""
                        }
                        {
                            this.state.nodata? <div><h3>No data Found </h3></div>:null
                        }
                    </div>
                 </div>
            </div>
        )
    }
}
