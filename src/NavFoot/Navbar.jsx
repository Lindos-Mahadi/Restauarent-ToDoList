import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () =>{
  return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">RESTAURANT</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/Create">Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/List">List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/Detail">Detail</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/Search">Search</NavLink>
                        </li>
                       {
                           localStorage.getItem("login") ?
                           <li className="nav-item">
                           <NavLink exact activeClassName="menu_active" className="nav-link" to="/logout">Logout</NavLink>
                       </li>
                       :
                       <li className="nav-item">
                           <NavLink exact activeClassName="menu_active" className="nav-link" to="/login">Login</NavLink>
                       </li>
                       }
                    </ul>
                </div>
            </div>
        </nav>

    </React.Fragment>
  );
};

export default Navbar;