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
                  <div class="cardb">
                    <img
                      src="lb.jpg"
                      width="400"
                      height="400"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="cardb-body">
                      {/* <a href="/CourseHome" class="btn btn-primary"> */}
                      <button className="cardb-button">
                        <a
                          href="/LBrowse"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Browse For Books
                        </a>{" "}
                      </button>

                      {/* </a> */}
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="cardb">
                    <img
                      src="rlb.jpg"
                      width="400"
                      height="400"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="cardb-body">
                      {/* <a href="/CourseHome" class="btn btn-primary"> */}
                      <button className="cardb-button">
                        <a
                          href="/LBReserveHome"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Reserved Books
                        </a>{" "}
                      </button>

                      {/* </a> */}
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="cardb">
                    <img
                      src="lreport.jpg"
                      width="400"
                      height="400"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="cardb-body">
                      {/* <a href="/CourseHome" class="btn btn-primary"> */}
                      <button className="cardb-button">
                        <a
                          href="/LBRDashboard"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Report
                        </a>{" "}
                      </button>

                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
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
