import React, {Component} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import ManageTeacher from "./Pages/manageteacher/ManageTeacher";
import ManageStudent from "./Pages/managestudent/ManageStudent";
import User from "./Pages/user/User";
import Loginn from "./Loginn";
import {BrowserRouter as Router, Route, Link, Navlink, Switch} from 'react-router-dom';
import Home from "./Pages/home/Home";
// class App extends React.Component{
//   render(){
//   return(
//    <div>
     
//      <Loginn/>
//     <Router>
//      <Topbar/>
//     <div className="container"> 
//       <Sidebar/>
//       <Switch>      
//         <Route exact path="/home">
//       <Home/>
//         </Route>
//         <Route path="/manageteacher">
//       <ManageTeacher />
//         </Route>
//         <Route path="/managestudent">
//       <ManageStudent />
//         </Route>
//         <Route path="/user">
//       <User/>
//         </Route>
//       </Switch>   
//     </div>
//     </Router>
//      </div>



    
//   );
//   }
// }
// export default App;
// import React from 'react';
// import './App.css';
// import Sidebar from './Sidebar';
// import {BrowserRouter as Router, Route, Link, Navlink, Switch} from 'react-router-dom';
// import Dashboard from './Dashboard';
// import ManageTeacher from './ManageTeacher';
// import ManageStudent from './ManageStudent';
// import Profile from './Profile';
// import Logout from './Logout'; 


    function App() {
      return (
        <Loginn/>
        // <Router>
        //   <Loginn/>
          
        // <div className="App">
        //     <Sidebar />
            
        //     <Switch>
        //       <Route path="/home"  component={Home} />
        //       <Route path="/teacher" component={ManageTeacher} />
        //       <Route path="/student" component={ManageStudent} />
        //       <Route path="/user" component={User} />
        //     </Switch>
        // </div> 
        //   </Router>
        
      );
    }
    
    export default App;