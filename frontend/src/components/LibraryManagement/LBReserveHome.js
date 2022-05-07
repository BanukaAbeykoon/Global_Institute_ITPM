import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class LBReserveHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LBReserve: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/LBReserve").then((res) => {
      if (res.data.success) {
        this.setState({
          LBReserve: res.data.LBReservePosts,
        });

        console.log(this.state.LBReserve);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/LBReserve/delete/${id}`).then((res) => {
      swal.fire("Delete", "Deleted Successfully", "success");
      this.retrievePosts();
    });
  };

  filterData(LBReserve, searchKey) {
    const result = LBReserve.filter(
      (LBReserve) =>
        LBReserve.Book_Name.toLowerCase().includes(searchKey) ||
        LBReserve.NIC.toLowerCase().includes(searchKey) ||
        LBReserve.pno.toLowerCase().includes(searchKey)
    );
    this.setState({ LBReserve: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get(`http://localhost:8000/LBReserve`).then((res) => {
      if (res.data.success) {
        this.filterData(res.data.LBReservePosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="container">
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

                        <div
                          className="collapse navbar-collapse"
                          id="navbarNav"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/" className="nav-link">
                                Main Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBDashboard" className="nav-link">
                                LBReserve Dashboard -
                              </a>
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBReserveHome" className="nav-link">
                                Reserved Books -
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
              <div
                class="form-check"
                style={{
                  float: "right",
                  width: "26%",
                }}
              >
                <div
                  class="a1"
                  style={{
                    background: "transparent",
                    opacity: 0.7,
                  }}
                >
                  <div className="col-lg-30 mt-20 mb-2">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      name="searchQuery"
                      onChange={this.handleSearchArea}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="asdw" style={{}}>
                <div className="col-lg-9 mt-2 mb-2">
                  <div
                    className="p-3 mb-2 bg-dark text-light rounded-3"
                    style={{
                      background: "transparent",
                      height: "43px",
                      opacity: 0.5,
                      padding: "10px",
                    }}
                  >
                    {/* <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value=""
                        onChange={this.handleSearchArea}
                      />

                      <label class="form-check-label" for="exampleRadios2">
                        ALL
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                        </div>
                      </label>
                    </div> */}

                    {/* <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="yes"
                        onChange={this.handleSearchArea}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Avalable
                        <div>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp;&nbsp;
                        </div>
                      </label>
                    </div> */}
                    {/* <div class="form-check" style={{ float: "left" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="no"
                        onChange={this.handleSearchArea}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Not Avalable
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              <hr></hr>
              <button className="btn btn-success">
                <a
                  href="/AddLBR"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ADD NEW BOOK
                </a>
              </button>
              <br /> <br />
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book ID</th>
                    <th scope="col">Book Name </th>
                    <th scope="col">NIC</th>
                    <th scope="col">Phone Number </th>
                    <th scope="col">Date</th>
                    <th scope="col">username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.LBReserve.map((LBReserve, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>

                      <td> {LBReserve.Book_ID}</td>
                      <td>{LBReserve.Book_Name} </td>
                      <td>{LBReserve.NIC} </td>
                      <td>{LBReserve.pno} </td>
                      <td>{LBReserve.date} </td>
                      <td>{LBReserve.username} </td>
                      <td>{LBReserve.Password} </td>
                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/EditLBR/${LBReserve._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(LBReserve._id)}
                        >
                          <i className="fas fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr></hr>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
