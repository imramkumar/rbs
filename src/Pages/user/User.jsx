import React, { Component } from "react";
import { Publish } from '@material-ui/icons';

import "./user.css";
class User extends React.Component {
    render(){
    return (
        <div className="user">
            <h1 className="User Profile"> User Profile</h1>
            <form className="UserForm">
                <div className="UserItem">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="UserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="fullname" />
                </div>
                <div className="UserItem">
                    <label>Password</label>
                    <input type="text" placeholder="password" />
                </div>
                <div className="UserItem">
                    <label>Address</label>
                    <input type="text" placeholder="address" />
                </div>
                <div>
                <button className="userUpdateButton">Update</button>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateUpload">
                        <img className="userUpdateImg" src="/puneet.jpg" alt=""/>
                        <label htmlFor="file"><Publish/></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                </div>
            </form>
        </div>
    );
    }
}
export default User;
