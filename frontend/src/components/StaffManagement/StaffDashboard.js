import React, { Component } from "react";

class StaffDashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>
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
                          <a href="/Maindashbord" className="nav-link" style={{color: '#000000'}}>
                            Main Dashboard -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/StaffDashboard" className="nav-link" style={{color: '#000000'}}>
                            Staff Dashboard -
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="staff.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  {/* <a href="/StaffHome" class="btn btn-primary"> */}
                  <button className="btn btn-primary">
                    <a
                      href="/StaffAcademichome"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Academic Staff
                    </a>{""}
                  </button>

                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="non1.jpeg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <a href="/StaffNonacademichome" class="btn btn-primary">
                    NonAcademic Staff
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="report.png"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <a href="/StaffReport" class="btn btn-primary">
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffDashboard;