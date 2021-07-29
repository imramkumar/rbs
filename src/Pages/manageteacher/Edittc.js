import React, { Component } from "react";
// import "./Edittc.css";
import axios from "axios";
class Edittc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      st: false,
      SNo: "",
      Teacherid: "",
      Name: "",
      College: "",
      Contact: "",
    };
  }
  componentDidMount() {
    this.setState({
      SNo: this.props.SNo,
      Teacherid: this.props.Teacherid,
      Name: this.props.Name,
      College: this.props.College,
      Contact: this.props.Contact,
    });
    console.log(this.props.id);
  }
  getdata = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateData = (e) => {
    const id = this.props.id;
    const sno = this.state.SNo;
    const teacherid = this.state.Teacherid;
    const name = this.state.Name;
    const contact = this.state.Contact;
    const college = this.state.College;
    const data = {id, sno, teacherid, name, contact, college };
    console.log(this.props.id);
    console.log(this.state.SNo);
    console.log(this.state.Teacherid);
    console.log(this.state.Name);
    console.log(this.state.Contact);
    console.log(this.state.College);


    axios
      .get("http://localhost/Updtc.php", { params: data })
      .then((res) => {
        this.setState({
          result: res.data,
        });
      })
      .catch((err) => {
        console.log("failed");
      });
  };

  render() {
    return (
      <div className='containers'>
        <h1>Edit Teacher</h1>
        <form >
          <div class='mb-1'>
            <label for='id' class='form-label'>SNo</label>
            <input
              type='text'
              name='SNo'
              class='form-control'
              id=''
              placeholder='SNo'
              value={this.state.SNo}
              onChange={this.getdata}
            />
          </div>
          <br></br>
          <div class='mb-1'>
            <label for='id' class='form-label'>Teacher ID</label>
            <input
              name='Teacherid'
              type='text'
              class='form-control'
              id=''
              placeholder='Teacher ID'
              value={this.state.Teacherid}
              onChange={this.getdata}
            />
          </div>
          <br></br>
          <div class='mb-1'>
            <label for='id' class='form-label'>Name</label>
            <input
              type='text'
              name='Name'
              class='form-control'
              id=''
              placeholder='Name'
              value={this.state.Name}
              onChange={this.getdata}
            />
          </div>
          <br></br>

          <div class='mb-1'>
            <label for='id' class='form-label'>College</label>
            <input
              type='text'
              name='College'
              class='form-control'
              id=''
              placeholder='College'
              value={this.state.College}
              onChange={this.getdata}
            />
          </div>
          <br></br>
          <div class='mb-1'>
            <label for='id' class='form-label'>Contact</label>
            <input
              type='text'
              name='Contact'
              class='form-control'
              id=''
              placeholder='Contact'
              value={this.state.Contact}
              onChange={this.getdata}
            />
          </div>
          <br></br>
          <div className='text-center'>
            <button
              type = 'submit'
              className='btn btn-primary'
              onClick={this.updateData}
              >
              Update 
            </button>
            
            
          </div>
        </form>
      </div>
    );
  }
}
export default Edittc;
