import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Edittc from "./Edittc";
import Add from "./Add";

class ManageTeacher extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: "",
      exceldata: "",
      teacher: [],
      st: false,
      st2: false,
      st3: false,
      btnkey: "",
    };
  }
  addData = (key) => {
    this.setState({ st: true });
  };
  componentDidMount() {
    axios
      .get("http://localhost/disptc.php")
      .then((response) => {
        this.setState({ teacher: response.data });
        // console.log(this.state.teacher);
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
    const id = this.state.teacher[key].id;
    console.log(this.state.teacher[key].id);
    const data = {
      id,
    };
    axios
      .get("http://localhost/deletetc.php", { params: data })
      .then((rahu) => {
        console.log(rahu.data);
        this.setState({
          message: rahu.data.res,
        });
      })
      .catch((err) => {
        console.log("Failed");
      });
  };

  uploadFile = (e) => {
    this.setState({
      exceldata: e.target.files[0],
    });
  };

  excelFile = (e) => {
    const formData = new FormData();
    formData.append("file", this.state.exceldata);
    axios
      .post("http://localhost/kalu.php", formData,{
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((rahu) => {
        console.log("pari");
        console.log(rahu.data);

        this.setState({
          message: rahu.data.res,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Failed");

      });
  };

  render() {
    if (this.state.st2) {
      // console.log(this.state.btnkey);
      // console.log(this.state.teacher[this.state.btnkey].SNo);
      return (
        <Edittc
          id={this.state.teacher[this.state.btnkey].id}
          Teacherid={this.state.teacher[this.state.btnkey].Teacherid}
          SNo={this.state.teacher[this.state.btnkey].SNo}
          Name={this.state.teacher[this.state.btnkey].Name}
          College={this.state.teacher[this.state.btnkey].College}
          Contact={this.state.teacher[this.state.btnkey].Contact}
        />
      );
    }

    if (this.state.st) {
      return <Add />;
    }
    return (
      
        <div className="container mb-3 mt-3">
          <h1>Teacher List</h1>
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
                <th>Teacher ID</th>
                <th>Name</th>
                <th>College</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teacher.map((res, key) => (
                <tr>
                  <td>{res.SNo}</td>
                  <td>{res.Teacherid}</td>
                  <td>{res.Name}</td>
                  <td>{res.College}</td>
                  <td>{res.Contact}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => this.editForm(key)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      value="submit"
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

export default ManageTeacher;

