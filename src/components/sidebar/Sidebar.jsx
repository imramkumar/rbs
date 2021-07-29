// import React, { Component } from "react";
// import "./sidebar.css";
// import {BrowserRouter as Router , Link } from "react-router-dom";
// import {
//   LineStyle,
//   PeopleAlt,
//   PeopleOutline,
//   AccountBox,
//   ExitToApp,
// } from "@material-ui/icons";
// class Sidebar extends React.Component {
//   render() {
//     return (
//       <div className="sidebar ">
//         <div className="sidebarWrapper">
//           <div className="sidebarMenu">
//             <ul className="sidebarList">
//               <Router>
//               <Link to="/home" className="link">
//                 <li className="sidebarListItem ">
//                   <LineStyle />
//                   Home
//                 </li>
//               </Link>
              
//               <Link to="/manageteacher" className="link">
//                 <li className="sidebarListItem">
//                   <PeopleAlt />
//                   ManageTeacher
//                 </li>
//               </Link>
//               <Link to="/managestudent" className="link">
//                 <li className="sidebarListItem">
//                   <PeopleOutline />
//                   ManageStudent
//                 </li>
//               </Link>
//               <Link to="/user" className="link">
//                 <li className="sidebarListItem">
//                   <AccountBox />
//                   Profile
//                 </li>
//               </Link>
//               <Link to="/logout" className="link">

//               <li className="sidebarListItem">
//                 <ExitToApp />
//                 Logout
//               </li>
//               </Link>
//               </Router>

//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Sidebar;

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
 
const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh',  overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            DES
          </a>
        </CDBSidebarHeader>
 
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {/* <Router> */}
            <NavLink exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/teacher" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Teacher</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/student" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Student</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                User Profile
              </CDBSidebarMenuItem>
            </NavLink>
        
 
            <NavLink
              exact
              to="/logout"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
            {/* </Router> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
 
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
 
export default Sidebar;
