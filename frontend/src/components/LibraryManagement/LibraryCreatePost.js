import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class LibraryCreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookid: Date.now(),
      bookname: "",
      author: "",
      relatedmodule: "",
      bookstatus: "",
      username: "",
      Password: "",
      bookidError: ",",
      booknameError: ",",
      authorError: ",",
      relatedmoduleError: ",",
      bookstatusError: ",",
      usernameError: ",",
      PasswordError: ",",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = () => {
    let bookidError = "";
    let booknameError = "";
    let authorError = "";
    let relatedmoduleError = "";
    let bookstatusError = ""
   
    if (!this.state.bookid) {
      bookidError = "* BookID is Required!";
    }

    if (!this.state.bookname) {
      booknameError = "* Book Name is Required!";
    }

    if (!this.state.author) {
      authorError = "* Author is Required!";
    }

    if (!this.state.relatedmodule) {
      relatedmoduleError = "* Related Module is Required!";
    }

    if (!this.state.bookstatus) {
      bookstatusError = "* Book Status is Required!";
    }


    if (
      bookidError ||
      booknameError ||
      authorError ||
      relatedmoduleError ||
      bookstatusError 
     
    ) {
      this.setState({
        bookidError,
        booknameError,
        authorError,
        relatedmoduleError,
        bookstatusError,
      
      });

      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const {
      bookid,
      bookname,
      author,
      relatedmodule,
      bookstatus,
      username,
      Password,
    } = this.state;

    if (isValid) {
      const data = {
        bookid: bookid,
        bookname: bookname,
        author: author,
        relatedmodule: relatedmodule,
        bookstatus: bookstatus,
        username: username,
        Password: Password,
      };
      console.log(data);

      axios.post("http://localhost:8000/Library/save", data).then((res) => {
        swal.fire("Saved", "Saved Successfully", "success");
        if (res.data.success) {
          this.setState({
            bookid: "bookid",
            bookname: "bookname",
            author: "author",
            relatedmodule: "relatedmodule",
            bookstatus: "bookstatus",
            username: "username",
            Password: "Password",
          });
        }
        window.location.href = "/LBrowse";
      });
    }
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto" style={{ color: "White" }}>
        {" "}
        {/* add nav bar */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{
                  backgroundColor: "#e3f2fd",
                  width: "134%",
                  border: " solid #5f9ea0",
                  padding: "0px",
                }}
              >
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toogle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Tooggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/" className="nav-link">
                          Main Dashboard -
                        </a>
                      </li>
                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/LBDashboard" className="nav-link">
                          Library Dashboard -
                        </a>
                      </li>
                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/LBrowse" className="nav-link">
                          Browse For Books -
                        </a>
                      </li>

                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/AddLB" className="nav-link">
                          Add A New Book
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="topic" style={{ color: "yellow" }}>
          <h1 className="h3 mb-3 font-weight-normal">ADD A NEW BOOK</h1>
        </div>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>BookID </label>
            <input
              type="number"
              className="form-control"
              name="bookid"
              placeholder="Enter Book ID"
              value={this.state.bookid}
              onChange={this.handleInputChange}
              readOnly
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.bookidError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Book Name </label>
            <input
              type="text"
              className="form-control"
              name="bookname"
              placeholder="Enter Book Name"
              value={this.state.bookname}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.booknameError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Enter Author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.authorError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Related Module</label>
            <input
              type="text"
              className="form-control"
              name="relatedmodule"
              placeholder="Enter Related Module"
              value={this.state.relatedmodule}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.relatedmoduleError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Book Status</label>
            <input
              type="text"
              className="form-control"
              name="bookstatus"
              placeholder="Enter Book Status"
              value={this.state.bookstatus}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.bookstatusError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter user name"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.usernameError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Password</label>
            <input
              type="text"
              className="form-control"
              name="Password"
              placeholder="Enter Password"
              value={this.state.Password}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.PasswordError}
            </div>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;&nbsp; Save
          </button>
        </form>
        &nbsp; &nbsp;
      </div>
    );
  }
}
