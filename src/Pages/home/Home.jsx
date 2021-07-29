import React, { Component } from "react";

import "./home.css"
class Home extends React.Component {
    render(){
    return (

    <div className="jack">
    <React.Fragment>
      <h1 className='rock my-3 text-center '>Digital Evaluation System</h1>
      <p className="kalu px-4 ">It is web based application.This software basically provides online copy checking smart way to many universities. The purpose of  this project copy check easily without have any issue . Which is user friendly, simple, fast and cost-effective.</p>
          <p className="kalu px-4 ">This module 'College Module'is also part of this project. Which is provide easy to manage Teacher, Student and User profiel data records and easily manage by some operation view, edit, delete and upload data.</p>
          &nbsp;
          
      <div className="container">
  <div className="row">
    <div className="col-sm">
      <div class="card" >
  <img src="teacher.png" class="card-img-top" alt="..." height="150px"/>
  <div className="card-body">
    <h5 class="card-title">Manage Teacher</h5>
    <p class="card-text">In this module  you can easily manage, Teacher information like Name, ID, Address, Phone etc. Also perform some operation Edit, Delete, Update and Upload data.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img src="student.png" class="card-img-top" alt="..." height="150px"/>
  <div class="card-body">
    <h5 class="card-title">Manage Student</h5>
    <p class="card-text">In this module  you can easily manage, Student information like Name, Roll No., Course, Semester etc. Also perform some operation Edit, Delete, Update data.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img src="profile.png" class="card-img-top" alt="..." height="150px"/>
  <div class="card-body">
    <h5 class="card-title">Manage User Profile</h5>
    <p class="card-text">In this Module you can easily manage user login details like Username, Password etc and Alos manage user profile information like Name, Address, Phone etc.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  </div>
    );
    }
}
export default Home;
