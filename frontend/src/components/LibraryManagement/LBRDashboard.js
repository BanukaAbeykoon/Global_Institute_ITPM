import React, { Component } from "react";

class LBDashboard extends Component {
  render() {
    return (
      <div className="s">
        <div className="sa">
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
                                Library Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/LBRDashboard" className="nav-link">
                                Report Dashboard -
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <br /> <br /> <br />
              <div class="row">
                <div
                  class="cardb"
                  style={{ opacity: "75%", width: "80%", left: "10%" }}
                >
                  <div class="card-header"></div>
                  <div class="card-body">
                    <h5 class="card-title">Monthly Report Of Library Books</h5>
                    <p class="card-text">
                      Click hear to get the mothly report of all the Library
                      Book Details
                    </p>
                    <a href="LBReport" class="btn btn-dark">
                      Library Books Report
                    </a>
                  </div>
                </div>
                <hr></hr>
                <br /> <br />
                <div
                  class="cardb"
                  style={{ opacity: "75%", width: "80%", left: "10%" }}
                >
                  <div class="card-header"></div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Monthly Report Of Library Book Users{" "}
                    </h5>
                    <p class="card-text">
                      Click hear to get the mothly report of all the
                      student/staff Details that who use the books in the
                      Library
                    </p>
                    <a href="LBR_Report" class="btn btn-dark">
                      Library Book Users Report
                    </a>
                  </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
              </div>{" "}
              &nbsp; &nbsp;
            </div>
            &nbsp; &nbsp;
          </div>
          &nbsp; &nbsp;
        </div>
        &nbsp; &nbsp;
      </div>
    );
  }
}

export default LBDashboard;
