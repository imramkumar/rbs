import React, { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import "./components/topbar/topbar.css";
import { Redirect } from "react-router-dom";
import Jackie from "./Jackie";
import Sidebar from "./components/sidebar/Sidebar";

class Loginn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      st: false,
      result: [],
    };
  }
  updateText = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const username = this.state.email,
      Password = this.state.password;
    const data = { username, Password };
    axios
      .get("http://localhost/login.php", { params: data })
      .then((result) => {
        this.setState({
          message: result.data,
        });
        this.validate();
      })
      .catch((err) => {
        console.log("failed");
      });
  };

  validate = (ev) => {
    const obj = this.state.message;
    if (
      this.state.email === obj[0].username &&
      this.state.password === obj[0].Password
    ) {
      this.setState({ st: true });
      console.log(this.state.st);
    } else {
      alert("invalid password or username");
    }
  };

  render() {
    return (
      
      <div className="topnav">
        
         <h2>Digital Evaluation System</h2> 
        {this.state.st ? (
          <Jackie />
        ) : (
         
           
  
          <div className=" mx-auto col-4 m-4  ">

            <h1 className=" text-center  text-primary ">College Login</h1>
            <form className=" px-5 py-4 shadow ">
              <div className="mb-3 ">
                <label htmlFor="email" class="form-label">
                  Username
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.updateText}
                  className="form-control  shadow-sm"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.updateText}
                  className="form-control shadow-sm"
                  required
                />
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
         

        )}
      </div>
     
      
    );
  }
  
}
export default Loginn;


