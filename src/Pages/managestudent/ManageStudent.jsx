import React, { Component } from "react";
import axios from "axios";
import Editst from "./Editst";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ManageStudent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      SNo: "",
      student: [],
      st: false,
      st2: false,
      st3: false,
      st4: false,
      btnkey: "",
    };
  }
  addData = (key) => {
    this.setState({ st: true });
  };
  componentDidMount() {
    axios
      .get("http://localhost/dispst.php")
      .then((response) => {
        this.setState({ student: response.data });
        console.log(this.state.student);
      })
      .catch((err) => {
        console.log("Failed");
      });
  }
  editForm = (key) => {
    this.setState({ st2: true, btnkey: key });
  };

  fun(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  deleteData = (key) => {
    const SNo = this.state.student[key].SNo;
    console.log(this.state.student[key].SNo)
    const data = {
      SNo,
    };
    axios
      .get("http://localhost/deletest.php", { params: data })
      .then((rahu) => {
        console.log(rahu.data);
        this.setState({
          message: rahu.data.res,
        });
      })
      .catch((err) => {
        console.log("Failed");
      });
  }


  // deleteConfirm = (id) => {
  //   if (window.confirm("Are you sure?")) {
  //     deleteUser(id);
  //   }
  // };
  render() {
    if (this.state.st2) {
      // console.log(this.state.btnkey);
      // console.log(this.state.teacher[this.state.btnkey].SNo);
      return (
        <Editst
        //   id={this.state.teacher[this.state.btnkey].id}
          SNo={this.state.student[this.state.btnkey].SNo}
          RollNo={this.state.student[this.state.btnkey].RollNo}
          Name={this.state.student[this.state.btnkey].Name}
          Gender={this.state.student[this.state.btnkey].Gender}
          College={this.state.student[this.state.btnkey].College}
          CollegeCode={this.state.student[this.state.btnkey].CollegeCode}
          Course={this.state.student[this.state.btnkey].Course}
          Semester={this.state.student[this.state.btnkey].Semester}
        />
      );
    }

    
    return (
      
        <div className='container mb-3 mt-3'>
          <h1>Student List</h1>
          <button
            type="button"
            className="bton btn-primary"
            onClick={this.addData}
          >
            Add
          </button>
          &nbsp;
          <input type="file" onChange={this.uploadFile} />
          <button
            type="button"
            className="bton btn-success"
            onClick={this.excelFile}
          >
            Upload
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SNo</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>College</th>
                <th>College Code</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.student.map((res, key) => (
                <tr>
                  <td>{res.SNo}</td>
                  <td>{res.RollNo}</td>
                  <td>{res.Name}</td>
                  <td>{res.Gender}</td>
                  <td>{res.College}</td>
                  <td>{res.CollegeCode}</td>
                  <td>{res.Course}</td>
                  <td>{res.Semester}</td>
                  <td>
                    <button
                      type='button'
                      className='btn btn-outline-primary'
                      onClick={() => this.editForm(key)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type='button'
                      className='btn btn-outline-secondary'
                      value='submit'
                      onClick={() => this.deleteData(key)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    );
  }
}

export default ManageStudent;
