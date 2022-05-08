import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import moment from "moment";

export default class LBReserveCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Book_ID: Date.now(),
      Book_Name: "",
      NIC: "",
      pno: "",
      date: "",
      username: "",
      Password: "",
      Book_IDError: ",",
      Book_NameError: ",",
      NICError: ",",
      pnoError: ",",
      dateError: ",",
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
    let Book_IDError = "";
    let Book_NameError = "";
    let NICError = "";
    let pnoError = "";
    let dateError = "";
    let usernameError = "";
    let PasswordError = "";

    if (!this.state.Book_ID) {
      Book_IDError = "* Book ID is Required!";
    }

   if (!this.state.Book_Name) {
     Book_NameError = "* Book Name is Required!";
   }

    if (!this.state.NIC) {
      NICError = "* NIC is Required!";
    }

    if (!this.state.pno) {
      pnoError = "* Phone Number is Required!";
    }
    else if (!this.state.pno.toString().match(/^[0-9]{10}$/)) {
      pnoError = "*Please Enter valid Telephone Number!";
    }

    if (!this.state.date) {
      dateError = "* Date is Required!";
      }
      
      if (!this.state.username) {
        usernameError = "* Username is Required!";
      } else if (
        !this.state.username.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)){
         usernameError = "* Valid email Required!";
        }
      
        if (!this.state.Password) {
          PasswordError = "* Password is Required!";
        }

    if (
      Book_IDError ||
      Book_NameError ||
      NICError ||
      pnoError ||
      dateError ||
      usernameError ||
      PasswordError
    ) {
      this.setState({
        Book_IDError,
        Book_NameError,
        NICError,
        pnoError,
        dateError,
        usernameError,
        PasswordError,
      });

      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const { Book_ID, Book_Name, NIC, pno, date, username, Password, } =
      this.state;

    if (isValid) {
      const data = {
        Book_ID: Book_ID,
        Book_Name: Book_Name,
        NIC: NIC,
        pno: pno,
        date: date,
        username: username,
        Password: Password,
      };
      console.log(data);

      axios.post("http://localhost:8000/LBReserve/save", data).then((res) => {
        swal.fire("Saved", "Saved Successfully", "success");
       
        if (res.data.success) {
          this.setState({
            Book_ID: "Book_ID",
            Book_Name: "Book_Name",
            NIC: "NIC",
            pno: "pno",
            date: "date",
            username: "username",
            Password: "Password",
          });
        }
         window.location.href = "/LBReserveHome";
        //  this.props.history.push("/LBReserveHome");
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
                          Reserve Books Dashboard -
                        </a>
                      </li>
                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/LBReserveHome" className="nav-link">
                          Library Books Report -
                        </a>
                      </li>

                      <li className="nav-item d-none d-sm-inline-block">
                        <a href="/AddLBR" className="nav-link">
                          Add Reserved Books
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
          <h1 className="h3 mb-3 font-weight-normal">ADD Reserved BOOK</h1>
        </div>
        <form className="needs-validation" noValidate>
          {/* <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Book ID </label>
            <input
              type="number"
              className="form-control"
              name="Book_ID"
              placeholder="Enter Book ID"
              value={this.state.Book_ID}
              onChange={this.handleInputChange}
              readonly
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.Book_IDError}
            </div>
          </div> */}
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Book Name </label>
            <input
              type="text"
              className="form-control"
              name="Book_Name"
              placeholder="Enter Book Name"
              value={this.state.Book_Name}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.Book_NameError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>NIC</label>
            <input
              type="text"
              className="form-control"
              name="NIC"
              placeholder="Enter NIC"
              value={this.state.NIC}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.NICError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Phone number</label>
            <input
              type="text"
              className="form-control"
              name="pno"
              placeholder="Enter Phone Number"
              value={this.state.pno}
              onChange={this.handleInputChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.pnoError}
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              placeholder="Enter Book Status"
              value={this.state.date}
              onChange={this.handleInputChange}
              max={moment().format("YYYY-MM-DD")}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.dateError}
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
              type="password"
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
