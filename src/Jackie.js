import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Navlink, Switch} from 'react-router-dom';
import ManageTeacher from "./Pages/manageteacher/ManageTeacher";
import ManageStudent from "./Pages/managestudent/ManageStudent";
import User from "./Pages/user/User";
import Home from "./Pages/home/Home"; 
import Sidebar from "./components/sidebar/Sidebar";

class Jackie extends React.Component{
    render(){
    return(
    
    
    <Router>
         
          
        <div className="App">
            <Sidebar />
            
            <Switch>
              <Route path="/home"  component={Home} />
              <Route path="/teacher" component={ManageTeacher} />
              <Route path="/student" component={ManageStudent} />
              <Route path="/user" component={User} />
              {/* <Route path="/logout" component={Logout} /> */}
            </Switch>
        </div> 
          </Router>
        
        );

    }
}
export default Jackie;