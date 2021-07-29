import React, { Component } from "react";
import axios from "axios";
// import './add.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSNo = this.onChangeSNo.bind(this);
    this.onChangeTeacherid = this.onChangeTeacherid.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCollege = this.onChangeCollege.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);

    this.state = {
      SNo: "",
      Teacherid: "",
      Name: "",
      College: "",
      Contact: "",
    };
  }

  onChangeSNo(e) {
    this.setState({
      SNo: e.target.value,
    });
  }
  onChangeTeacherid(e) {
    this.setState({
      Teacherid: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }
  onChangeCollege(e) {
    this.setState({
      College: e.target.value,
    });
  }
  onChangeContact(e) {
    this.setState({
      Contact: e.target.value,
    });
  }

  // onSubmit(e) {
  //   e.preventDefault();
  // }
  
  sendData(ev) {
    const SNo = this.state.SNo;
    const Teacherid = this.state.Teacherid;
    const Name = this.state.Name;
    const College = this.state.College;
    const Contact = this.state.Contact;
    const data = {
      SNo,
      Teacherid,
      Name,
      College,
      Contact,
    };
    axios
      .get("http://localhost/teacher.php", { params: data })
      .then((rahu) => {
        this.setState({
          message: rahu.data.resposnse,
        });
      })
      .catch((err) => {
        console.log("Failed");
      });
  }

  render() {
    return (
      <div className="cube ">
        <h1>Add New Teacher</h1>
        <form >
          <div className='form-group p-2'>
            <label>SNo</label>
            <input
              type='text'
              className='form-control'
              value={this.state.SNo}
              onChange={this.onChangeSNo}
            />
          </div>

          <div className='form-group p-2'>
            <label>Teacher ID</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Teacherid}
              onChange={this.onChangeTeacherid}
            />
          </div>

          <div className='form-group p-2'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.onChangeName}
            />
          </div>

          <div className='form-group p-2'>
            <label>College</label>
            <input
              type='text'
              className='form-control'
              value={this.state.College}
              onChange={this.onChangeCollege}
            />
          </div>

          <div className='form-group p-2'>
            <label>Contact</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Contact}
              onChange={this.onChangeContact}
            />
          </div>
          <div className='text-center'>

          <div className='form-group p-2' >
            <input
              type='submit'
              value='Add Teacher'
              onClick={this.sendData.bind(this)}
              className='btn btn-primary'
            />
          </div>
          </div>

        </form>
      </div>
    );
  }
}
export default Add;
