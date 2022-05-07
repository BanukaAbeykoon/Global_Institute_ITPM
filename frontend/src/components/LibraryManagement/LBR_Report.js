import React, { Component } from "react";
import axios from "axios";

import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (LBReserve) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Book_ID",
    "Book_Name",
    "NIC",
    "pno",
    "date",
    "username",
    "Password",
  ];
  const tableRows = [];

  LBReserve.map((LBReserve) => {
    const LBReservedata = [
      LBReserve.Book_ID,
      LBReserve.Book_Name,
      LBReserve.NIC,
      LBReserve.pno,
      LBReserve.date,
      LBReserve.username,
      LBReserve.Password,
    ];
    tableRows.push(LBReservedata);
  });
  doc.text("GLOBAL EDUCATION INSTITUTE", 70, 8).setFontSize(13);
  doc.text("Library Book Reciever Details Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("LBReserve details.pdf");
};

export default class LBR_Report extends Component {
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

  filterData(LBReserve, searchKey) {
    const result = LBReserve.filter(
      (LBReserve) =>
        LBReserve.pno.toLowerCase().includes(searchKey) ||
        LBReserve.Book_Name.toLowerCase().includes(searchKey) ||
        LBReserve.NIC.toLowerCase().includes(searchKey)
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
                              <a href="/LBRDashboard" className="nav-link">
                                Report Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBR_Report" className="nav-link">
                                Library Book Report -
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
                    <div class="form-check" style={{ float: "left" }}>
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
                    </div>

                    <div class="form-check" style={{ float: "left" }}>
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
                    </div>
                    <div class="form-check" style={{ float: "left" }}>
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
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="a" style={{ color: "yellow" }}>
                <h1>Library Books User Report</h1>
              </div>
              <br />
              <table class="table table-success">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book ID</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col"> pno </th>
                    <th scope="col"> date</th>
                    <th scope="col"> username</th>
                    <th scope="col"> Password</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.LBReserve.map((LBReserve, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>

                      <td>{LBReserve.Book_ID}</td>
                      <td>{LBReserve.Book_Name} </td>
                      <td>{LBReserve.NIC} </td>
                      <td>{LBReserve.pno} </td>
                      <td>{LBReserve.date} </td>
                      <td>{LBReserve.username} </td>
                      <td>{LBReserve.Password} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br /> <br />
              <div style={{ float: "left" }}>
                <button
                  type="donload-button"
                  style={{ backgroundColor: "#E74C3C ", padding: "2px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.Library)}
                >
                  Downloard As
                  <div class="docs">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line y2="13" x2="8" y1="13" x1="16"></line>
                      <line y2="17" x2="8" y1="17" x1="16"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{" "}
                    PDF
                  </div>
                  <div class="download">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="50"
                      width="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line y2="3" x2="12" y1="15" x1="12"></line>
                    </svg>
                  </div>
                </button>
              </div>
              &nbsp;&nbsp;
            </div>
            &nbsp;&nbsp;
          </div>
          &nbsp;&nbsp;
        </div>
      </div>
    );
  }
}
