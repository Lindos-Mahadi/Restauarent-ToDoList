import React, { Component } from "react";
import {Link} from "react-router-dom";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from "../NavFoot/Navbar";


class RestatuarentList extends Component {
  constructor() {
    super();
    this.state = {
      list: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData()
  {
    fetch("http://localhost:5000/restaurant").then((response) => {
      response.json().then((result) => {
        console.warn(result);
        this.setState({ list: result });
      });
    });
  }

  delete(id)
  {
    fetch("http://localhost:5000/restaurant/"+id,
    {
      method: "DELETE",
      // headers:{
      //     'Content-Type': 'application/json'
      // },
    }).then((result)=>{
      result.json().then((resp) =>{
          alert("Data has been Deleted Successfully.");
          this.getData();
      })
  })
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Restatuarent List</h1>
          {this.state.list ? (
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
                  {this.state.list.map((item, index) => (
                    <tr>
                      <td>{index}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}</td>
                      <td>
                        <Link to={"/update/"+item.id}><LoyaltyIcon style={{color:"orange"}} /></Link>
                        <Link onClick={()=>this.delete(item.id)}><DeleteIcon style={{color:"red"}} /></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>Please Wait.....</p>
          )}
        </div>
      </div>
    );
  }
}

export default RestatuarentList;
