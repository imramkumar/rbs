import React, { Component } from "react";
// import "./Editst.css";
import axios from "axios";
class Editst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      st: false,
      SNo: "",
      RollNo:"",
      Name: "",
      Gender: "",
      CollegeCode: "",
      Course: "",
      Semester: "",
    };
  }
  componentDidMount() {
    this.setState({
      SNo: this.props.SNo,
      RollNo: this.props.RollNo,
      Name: this.props.Name,
      Gender: this.props.Gender,
      College: this.props.College,
      CollegeCode: this.props.CollegeCode,
      Course: this.props.Course,
      Semester: this.props.Semester,
    });
    console.log(this.props.SNo);
  }
  getdata = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateData = (e) => {
    const sno = this.props.SNo;
    const rno = this.state.RollNo;
    const name = this.state.Name;
    const gender = this.state.Gender;
    const college = this.state.College;
    const collegecode = this.state.CollegeCode;
    const course = this.state.Course;
    const semester = this.state.Semester;
    const data = {sno, rno, name, gender, college, collegecode,course, semester };
    console.log(this.props.id);
    console.log(this.state.SNo);
    console.log(this.state.Teacherid);
    console.log(this.state.Name);
    console.log(this.state.Contact);
    console.log(this.state.College);


    axios
      .get("http://localhost/updst.php", { params: data })
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
      <div className='contain'>
        <h1>Edit Student</h1>
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
          &nbsp;
          <div class='mb-1'>
            <label for='id' class='form-label'>Roll No</label>
            <input
              name='RollNo'
              type='text'
              class='form-control'
              id=''
              placeholder='Roll No'
              value={this.state.RollNo}
              onChange={this.getdata}
            />
          </div>
          &nbsp;
          
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
          &nbsp;
          
          <div class='mb-1'>
            <label for='id' class='form-label'>Gender</label>
            <input
              type='text'
              name='Gender'
              class='form-control'
              id=''
              placeholder='Gender'
              value={this.state.Gender}
              onChange={this.getdata}
            />
          </div>
          &nbsp;
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
          &nbsp;

          <div class='mb-1'>
            <label for='id' class='form-label'>College Code</label>
            <input
              type='text'
              name='CollegeCode'
              class='form-control'
              id=''
              placeholder='CollegeCode'
              value={this.state.CollegeCode}
              onChange={this.getdata}
            />
          </div>
          &nbsp;

          <div class='mb-1'>
            <label for='id' class='form-label'>Course</label>
            <input
              type='text'
              name='Course'
              class='form-control'
              id=''
              placeholder='Course'
              value={this.state.Course}
              onChange={this.getdata}

            />
          </div>
          <br></br>
          <div class='mb-1'>
            <label for='id' class='form-label'>Semester</label>
            <input
              type='text'
              name='Semester'
              class='form-control'
              id=''
              placeholder='Semester'
              value={this.state.Semester}
              onChange={this.getdata}
            />
          </div>
          &nbsp;

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
export default Editst;
